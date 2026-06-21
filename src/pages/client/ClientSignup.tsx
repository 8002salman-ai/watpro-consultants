import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AuthShell } from "../../components/AuthShell";
import { inputClassName, primaryButtonClass } from "../../components/ui";
import { cn } from "../../utils/cn";
import { useAuth } from "../../context/AuthContext";

export default function ClientSignup() {
  const { signupClient } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    const result = signupClient({
      name: form.name,
      organization: form.organization,
      email: form.email,
      password: form.password,
    });
    if (result.ok) {
      navigate("/client");
    } else {
      setError(result.error);
    }
  };

  return (
    <AuthShell
      badge="Client Portal"
      title="Create your client account"
      subtitle="Register to manage engagements, training, and resources within the WATPRO client area."
      footer={
        <span>
          Already have an account?{" "}
          <Link to="/client/login" className="font-semibold text-amber-200 hover:text-amber-100">
            Sign in
          </Link>
        </span>
      }
    >
      {error ? (
        <div className="mb-5 rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-100">{error}</div>
      ) : null}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block text-sm text-slate-300">
          Full name
          <input className={cn(inputClassName, "mt-2")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" required />
        </label>
        <label className="block text-sm text-slate-300">
          Organization
          <input className={cn(inputClassName, "mt-2")} value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} placeholder="Organization name" required />
        </label>
        <label className="block text-sm text-slate-300">
          Email
          <input type="email" className={cn(inputClassName, "mt-2")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="name@organization.com" required />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-slate-300">
            Password
            <input type="password" className={cn(inputClassName, "mt-2")} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Create a password" required />
          </label>
          <label className="block text-sm text-slate-300">
            Confirm password
            <input type="password" className={cn(inputClassName, "mt-2")} value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} placeholder="Repeat password" required />
          </label>
        </div>
        <button type="submit" className={cn(primaryButtonClass, "w-full")}>
          Create account
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </AuthShell>
  );
}
