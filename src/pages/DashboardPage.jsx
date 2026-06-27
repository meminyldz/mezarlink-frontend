import { useState } from "react";
import { Link } from "react-router-dom";

import { mockMemorials } from "../data/mockMemorials";
import QrCodeCard from "../components/memorial/QrCodeCard";

function DashboardPage() {
  const [qrOpenFor, setQrOpenFor] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <div>
          <h1 className="text-5xl font-bold">Dashboard</h1>

          <p className="text-gray-600 mt-3">
            Oluşturduğunuz anı sayfaları
          </p>
        </div>

        <Link
          to="/create-memorial"
          className="bg-black text-white px-6 py-4 rounded-2xl text-center"
        >
          Yeni Anı Sayfası Oluştur
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockMemorials.map((memorial) => (
          <div
            key={memorial.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm"
          >
            <img
              src={memorial.coverPhoto}
              alt={memorial.fullName}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-semibold">
                {memorial.fullName}
              </h2>

              <p className="text-gray-500 mt-2">
                {memorial.birthDate} - {memorial.deathDate}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  to={`/m/${memorial.slug}`}
                  className="border px-4 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition"
                >
                  Görüntüle
                </Link>

                <button
                  className="border px-4 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition"
                  onClick={() =>
                    setQrOpenFor(
                      qrOpenFor === memorial.id ? null : memorial.id
                    )
                  }
                >
                  {qrOpenFor === memorial.id ? "QR Kodu Gizle" : "QR Kod"}
                </button>

                <button className="bg-black text-white px-4 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition">
                  Düzenle
                </button>
              </div>

              {qrOpenFor === memorial.id && (
                <div className="mt-6">
                  <QrCodeCard
                    slug={memorial.slug}
                    fullName={memorial.fullName}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
