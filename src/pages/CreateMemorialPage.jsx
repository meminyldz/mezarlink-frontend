import { useState } from "react";

import api from "../api/axios";
import QrCodeCard from "../components/memorial/QrCodeCard";

const initialForm = {
  fullName: "",
  birthDate: "",
  deathDate: "",
  biography: "",
};

function CreateMemorialPage() {
  const [form, setForm] = useState(initialForm);
  const [createdMemorial, setCreatedMemorial] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Backend slug'i kendisi uretiyor (MemorialService.generateUniqueSlug),
      // biz sadece form alanlarini gonderiyoruz.
      const response = await api.post("/memorials", {
        fullName: form.fullName,
        birthDate: form.birthDate || null,
        deathDate: form.deathDate || null,
        biography: form.biography,
      });

      setCreatedMemorial(response.data);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.fieldErrors?.[Object.keys(err.response?.data?.fieldErrors || {})[0]] ||
        "Anı sayfası oluşturulamadı, lütfen tekrar deneyin";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (createdMemorial) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Anı sayfası oluşturuldu</h1>

        <p className="text-gray-600 mb-10">
          QR kodu yazdırıp mezar taşına yapıştırabilirsiniz. Kodu okutan
          herkes bu anı sayfasını görecek.
        </p>

        <div className="flex justify-center">
          <QrCodeCard
            slug={createdMemorial.slug}
            fullName={createdMemorial.fullName}
          />
        </div>

        <button
          onClick={() => {
            setForm(initialForm);
            setCreatedMemorial(null);
          }}
          className="mt-10 border px-6 py-3 rounded-2xl hover:bg-gray-50 transition"
        >
          Yeni Bir Anı Sayfası Daha Oluştur
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-12">Anı Sayfası Oluştur</h1>

      {error && (
        <div className="mb-6 bg-red-50 text-red-700 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-sm space-y-6"
      >
        <input
          type="text"
          placeholder="Ad Soyad"
          value={form.fullName}
          onChange={handleChange("fullName")}
          required
          className="w-full border p-4 rounded-2xl"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="date"
            value={form.birthDate}
            onChange={handleChange("birthDate")}
            className="border p-4 rounded-2xl"
          />

          <input
            type="date"
            value={form.deathDate}
            onChange={handleChange("deathDate")}
            className="border p-4 rounded-2xl"
          />
        </div>

        <textarea
          rows="8"
          placeholder="Biyografi"
          value={form.biography}
          onChange={handleChange("biography")}
          className="w-full border p-4 rounded-2xl"
        />

        <div>
          <label className="block mb-3 font-medium">Kapak Fotoğrafı</label>
          <input type="file" accept="image/*" disabled />
          <p className="text-xs text-gray-400 mt-1">
            Fotoğraf yükleme henüz aktif değil, yakında eklenecek.
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition disabled:opacity-50"
        >
          {loading ? "Kaydediliyor..." : "Kaydet ve QR Kod Oluştur"}
        </button>
      </form>
    </div>
  );
}

export default CreateMemorialPage;