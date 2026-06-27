import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

function RegisterPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await api.post("/auth/register", { fullName, email, password });

      // Kayit basariliyken backend otomatik giris yapmiyor (session acmiyor),
      // bu yuzden kayittan sonra ayrica login cagrisi atip dashboard'a geciyoruz.
      await api.post("/auth/login", { email, password });
      navigate("/dashboard");
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.fieldErrors?.[Object.keys(err.response?.data?.fieldErrors || {})[0]] ||
        "Kayıt olunamadı, lütfen tekrar deneyin";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center">Kayıt Ol</h1>

        {error && (
          <div className="mb-6 bg-red-50 text-red-700 px-4 py-3 rounded-xl text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Ad Soyad"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full border p-4 rounded-2xl"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border p-4 rounded-2xl"
          />

          <input
            type="password"
            placeholder="Şifre (en az 8 karakter)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            className="w-full border p-4 rounded-2xl"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-2xl hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? "Hesap oluşturuluyor..." : "Hesap Oluştur"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;