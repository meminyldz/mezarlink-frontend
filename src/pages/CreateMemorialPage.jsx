import { useState } from "react";

import QrCodeCard from "../components/memorial/QrCodeCard";

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const initialForm = {
  fullName: "",
  birthDate: "",
  deathDate: "",
  biography: "",
};

function CreateMemorialPage() {
  const [form, setForm] = useState(initialForm);
  const [createdSlug, setCreatedSlug] = useState(null);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: backend hazır olduğunda burası
    // api.post("/memorials", formData) ile değiştirilecek.
    // Şimdilik form verisinden bir slug üretip "kaydedilmiş" gibi davranıyoruz.
    const slug = slugify(form.fullName) || "isimsiz";
    setCreatedSlug(slug);
  };

  if (createdSlug) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Anı sayfası oluşturuldu</h1>

        <p className="text-gray-600 mb-10">
          QR kodu yazdırıp mezar taşına yapıştırabilirsiniz. Kodu okutan
          herkes bu anı sayfasını görecek.
        </p>

        <div className="flex justify-center">
          <QrCodeCard slug={createdSlug} fullName={form.fullName} />
        </div>

        <button
          onClick={() => {
            setForm(initialForm);
            setCreatedSlug(null);
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

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-sm space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Ad Soyad"
            value={form.fullName}
            onChange={handleChange("fullName")}
            required
            className="border p-4 rounded-2xl"
          />

          <input
            type="text"
            value={slugify(form.fullName) ? `mezarlink.com/m/${slugify(form.fullName)}` : ""}
            readOnly
            placeholder="Adres otomatik oluşturulacak"
            className="border p-4 rounded-2xl bg-gray-50 text-gray-500"
          />
        </div>

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
          <input type="file" accept="image/*" />
        </div>

        <div>
          <label className="block mb-3 font-medium">
            Galeri Fotoğrafları
          </label>
          <input type="file" accept="image/*" multiple />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition"
        >
          Kaydet ve QR Kod Oluştur
        </button>
      </form>
    </div>
  );
}

export default CreateMemorialPage;
