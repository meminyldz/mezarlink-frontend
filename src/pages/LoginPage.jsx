import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await api.post("/auth/login", { email, password });
      navigate("/dashboard");
    } catch (err) {
      const message =
        err.response?.data?.message || "Giriş yapılamadı, lütfen tekrar deneyin";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center">Giriş Yap</h1>

        {error && (
          <div className="mb-6 bg-red-50 text-red-700 px-4 py-3 rounded-xl text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-2xl p-4"
              placeholder="ornek@email.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Şifre</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-2xl p-4"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-2xl hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;