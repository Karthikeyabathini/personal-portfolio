import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) return <Navigate to="/admin/dashboard" replace />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post("/auth/login", credentials);
      login(data.token);
      toast.success("Welcome back");
      navigate("/admin/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section auth-page">
      <form className="glass-card auth-card" onSubmit={handleSubmit}>
        <span className="eyebrow">Admin Login</span>
        <h1>Portfolio control room</h1>
        <input
          placeholder="Username"
          value={credentials.username}
          onChange={(event) => setCredentials({ ...credentials, username: event.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
        />
        <button className="btn primary" disabled={loading}>{loading ? "Signing in..." : "Login"}</button>
      </form>
    </section>
  );
}

export default AdminLogin;
