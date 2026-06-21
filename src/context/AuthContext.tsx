import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Role = "client" | "admin";

export type StoredUser = {
  id: string;
  name: string;
  email: string;
  organization?: string;
  password: string;
  role: Role;
  createdAt: string;
};

export type SessionUser = Omit<StoredUser, "password">;

type AuthResult = { ok: true } | { ok: false; error: string };

type AuthContextValue = {
  client: SessionUser | null;
  admin: SessionUser | null;
  signupClient: (input: {
    name: string;
    email: string;
    organization: string;
    password: string;
  }) => AuthResult;
  loginClient: (email: string, password: string) => AuthResult;
  loginAdmin: (email: string, password: string) => AuthResult;
  logout: (role: Role) => void;
  allClients: SessionUser[];
};

const USERS_KEY = "watpro_users_v1";
const SESSION_KEY = "watpro_sessions_v1";

const DEFAULT_ADMIN: StoredUser = {
  id: "admin-root",
  name: "WATPRO Administrator",
  email: "admin@watpro.com",
  password: "watpro2026",
  role: "admin",
  createdAt: new Date("2026-01-01").toISOString(),
};

const AuthContext = createContext<AuthContextValue | null>(null);

function readUsers(): StoredUser[] {
  if (typeof window === "undefined") return [DEFAULT_ADMIN];
  try {
    const raw = window.localStorage.getItem(USERS_KEY);
    if (!raw) return [DEFAULT_ADMIN];
    const parsed = JSON.parse(raw) as StoredUser[];
    if (!parsed.some((user) => user.role === "admin")) {
      return [DEFAULT_ADMIN, ...parsed];
    }
    return parsed;
  } catch {
    return [DEFAULT_ADMIN];
  }
}

function writeUsers(users: StoredUser[]) {
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

type SessionState = { client: SessionUser | null; admin: SessionUser | null };

function readSessions(): SessionState {
  if (typeof window === "undefined") return { client: null, admin: null };
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    if (!raw) return { client: null, admin: null };
    return JSON.parse(raw) as SessionState;
  } catch {
    return { client: null, admin: null };
  }
}

function toSessionUser(user: StoredUser): SessionUser {
  const { password: _password, ...rest } = user;
  return rest;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<StoredUser[]>(readUsers);
  const [sessions, setSessions] = useState<SessionState>(readSessions);

  useEffect(() => {
    writeUsers(users);
  }, [users]);

  useEffect(() => {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(sessions));
  }, [sessions]);

  const signupClient = useCallback(
    (input: { name: string; email: string; organization: string; password: string }): AuthResult => {
      const email = input.email.trim().toLowerCase();
      if (users.some((user) => user.email.toLowerCase() === email)) {
        return { ok: false, error: "An account with this email already exists." };
      }
      const newUser: StoredUser = {
        id: `client-${Date.now()}`,
        name: input.name.trim(),
        email,
        organization: input.organization.trim(),
        password: input.password,
        role: "client",
        createdAt: new Date().toISOString(),
      };
      setUsers((current) => [...current, newUser]);
      setSessions((current) => ({ ...current, client: toSessionUser(newUser) }));
      return { ok: true };
    },
    [users],
  );

  const loginClient = useCallback(
    (email: string, password: string): AuthResult => {
      const match = users.find(
        (user) =>
          user.role === "client" &&
          user.email.toLowerCase() === email.trim().toLowerCase() &&
          user.password === password,
      );
      if (!match) {
        return { ok: false, error: "Invalid client credentials. Please try again." };
      }
      setSessions((current) => ({ ...current, client: toSessionUser(match) }));
      return { ok: true };
    },
    [users],
  );

  const loginAdmin = useCallback(
    (email: string, password: string): AuthResult => {
      const match = users.find(
        (user) =>
          user.role === "admin" &&
          user.email.toLowerCase() === email.trim().toLowerCase() &&
          user.password === password,
      );
      if (!match) {
        return { ok: false, error: "Invalid administrator credentials." };
      }
      setSessions((current) => ({ ...current, admin: toSessionUser(match) }));
      return { ok: true };
    },
    [users],
  );

  const logout = useCallback((role: Role) => {
    setSessions((current) => ({ ...current, [role]: null }));
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      client: sessions.client,
      admin: sessions.admin,
      signupClient,
      loginClient,
      loginAdmin,
      logout,
      allClients: users.filter((user) => user.role === "client").map(toSessionUser),
    }),
    [sessions, signupClient, loginClient, loginAdmin, logout, users],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
