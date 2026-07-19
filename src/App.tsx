import { type ReactNode } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Academy from "./pages/Academy";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CaseStudies from "./pages/CaseStudies";
import Insights from "./pages/Insights";
import Publications from "./pages/Publications";
import Media from "./pages/Media";
import TrainingCalendar from "./pages/TrainingCalendar";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import ClientLogin from "./pages/client/ClientLogin";
import ClientSignup from "./pages/client/ClientSignup";
import ClientDashboard from "./pages/client/ClientDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

function RequireClient({ children }: { children: ReactNode }) {
  const { client } = useAuth();
  return client ? <>{children}</> : <Navigate to="/client/login" replace />;
}

function RequireAdmin({ children }: { children: ReactNode }) {
  const { admin } = useAuth();
  return admin ? <>{children}</> : <Navigate to="/admin" replace />;
}

function RedirectIfClient({ children }: { children: ReactNode }) {
  const { client } = useAuth();
  return client ? <Navigate to="/client" replace /> : <>{children}</>;
}

function RedirectIfAdmin({ children }: { children: ReactNode }) {
  const { admin } = useAuth();
  return admin ? <Navigate to="/admin/dashboard" replace /> : <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="industries" element={<Industries />} />
            <Route path="academy" element={<Academy />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetail />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="insights" element={<Insights />} />
            <Route path="publications" element={<Publications />} />
            <Route path="media" element={<Media />} />
            <Route path="training-calendar" element={<TrainingCalendar />} />
            <Route path="events" element={<Events />} />
            <Route path="contact" element={<Contact />} />

            <Route
              path="client/login"
              element={
                <RedirectIfClient>
                  <ClientLogin />
                </RedirectIfClient>
              }
            />
            <Route
              path="client/signup"
              element={
                <RedirectIfClient>
                  <ClientSignup />
                </RedirectIfClient>
              }
            />
            <Route
              path="client"
              element={
                <RequireClient>
                  <ClientDashboard />
                </RequireClient>
              }
            />

            <Route
              path="admin"
              element={
                <RedirectIfAdmin>
                  <AdminLogin />
                </RedirectIfAdmin>
              }
            />
            <Route
              path="admin/dashboard"
              element={
                <RequireAdmin>
                  <AdminDashboard />
                </RequireAdmin>
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}
