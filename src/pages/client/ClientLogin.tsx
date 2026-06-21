import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AuthShell } from "../../components/AuthShell";
import { inputClassName, primaryButtonClass } from "../../components/ui";
import { cn } from "../../utils/cn";
import { useAuth } from "../../context/AuthContext";

export default function ClientLogin() {
  const { loginClient } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = loginClient(email, password);
    if (result.ok) {
      navigate("/client");
    } else {
      setError(result.error);
    }
  };

  return (
    <AuthShell
      badge="Client Portal"
      title="Welcome back"
      subtitle="Sign in to access your engagement workspace, training registrations, and WATPRO resources."
      footer={
        <span>
          New to WATPRO?{" "}
          <Link to="/client/signup" className="font-semibold text-amber-200 hover:text-amber-100">
            Create a client account
          </Link>
        </span>
      }
    >
      {error ? (
        <div className="mb-5 rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-100">{error}</div>
      ) : null}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block text-sm text-slate-300">
          Email
          <input type="email" className={cn(inputClassName, "mt-2")} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@organization.com" required />
        </label>
        <label className="block text-sm text-slate-300">
          Password
          <input type="password" className={cn(inputClassName, "mt-2")} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" required />
        </label>
        <button type="submit" className={cn(primaryButtonClass, "w-full")}>
          Sign in to client area
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </AuthShell>
  );
}
