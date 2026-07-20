import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { AuthShell } from "../../components/AuthShell";
import { inputClassName, primaryButtonClass } from "../../components/ui";
import { cn } from "../../utils/cn";
import { useAuth } from "../../context/AuthContext";

export default function AdminLogin() {
  const { loginAdmin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = loginAdmin(email, password);
    if (result.ok) {
      navigate("/admin/dashboard");
    } else {
      setError(result.error);
    }
  };

  return (
    <AuthShell
      badge="Admin Area"
      title="Administrator sign in"
      subtitle="Restricted access for WATPRO internal management of clients, registrations, and enquiries."
      footer={
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-6 text-slate-400">
          <p className="flex items-center gap-2 font-semibold text-slate-200">
            <ShieldCheck className="h-4 w-4 text-amber-200" />
            Authorized personnel only
          </p>
          <p className="mt-2">Access is restricted to WATPRO administrators. Contact info@watproconsultants.com for assistance.</p>
        </div>
      }
    >
      {error ? (
        <div className="mb-5 rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-100">{error}</div>
      ) : null}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block text-sm text-slate-300">
          Administrator email
          <input type="email" className={cn(inputClassName, "mt-2")} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@watproconsultants.com" required />
        </label>
        <label className="block text-sm text-slate-300">
          Password
          <input type="password" className={cn(inputClassName, "mt-2")} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" required />
        </label>
        <button type="submit" className={cn(primaryButtonClass, "w-full")}>
          Access admin dashboard
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </AuthShell>
  );
}
