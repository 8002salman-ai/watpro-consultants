export type Registration = {
  id: string;
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  seats: string;
  program: string;
  notes: string;
  createdAt: string;
};

export type ContactMessage = {
  id: string;
  fullName: string;
  organization: string;
  email: string;
  interest: string;
  message: string;
  createdAt: string;
};

const REG_KEY = "watpro_registrations_v1";
const MSG_KEY = "watpro_messages_v1";

function read<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T[]) : [];
  } catch {
    return [];
  }
}

function write<T>(key: string, value: T[]) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getRegistrations(): Registration[] {
  return read<Registration>(REG_KEY);
}

export function addRegistration(input: Omit<Registration, "id" | "createdAt">): Registration {
  const record: Registration = {
    ...input,
    id: `reg-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  const all = getRegistrations();
  write(REG_KEY, [record, ...all]);
  return record;
}

export function getMessages(): ContactMessage[] {
  return read<ContactMessage>(MSG_KEY);
}

export function addMessage(input: Omit<ContactMessage, "id" | "createdAt">): ContactMessage {
  const record: ContactMessage = {
    ...input,
    id: `msg-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  const all = getMessages();
  write(MSG_KEY, [record, ...all]);
  return record;
}
