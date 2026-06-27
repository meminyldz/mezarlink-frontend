import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../api/axios";
import QrCodeCard from "../components/memorial/QrCodeCard";

function DashboardPage() {
  const [memorials, setMemorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qrOpenFor, setQrOpenFor] = useState(null);

  useEffect(() => {
    let isMounted = true;

    api
      .get("/memorials/mine")
      .then((response) => {
        if (isMounted) setMemorials(response.data);
      })
      .catch((err) => {
        if (isMounted) {
          setError(
            err.response?.data?.message || "Anı sayfaları yüklenemedi"
          );
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <div>
          <h1 className="text-5xl font-bold">Dashboard</h1>
          <p className="text-gray-600 mt-3">Oluşturduğunuz anı sayfaları</p>
        </div>

        <Link
          to="/create-memorial"
          className="bg-black text-white px-6 py-4 rounded-2xl text-center"
        >
          Yeni Anı Sayfası Oluştur
        </Link>
      </div>

      {loading && <p className="text-gray-500">Yükleniyor...</p>}

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl text-sm mb-6">
          {error}
        </div>
      )}

      {!loading && !error && memorials.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center text-gray-500">
          Henüz bir anı sayfası oluşturmadınız.
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {memorials.map((memorial) => (
          <div
            key={memorial.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm"
          >
            {memorial.coverPhoto ? (
              <img
                src={memorial.coverPhoto}
                alt={memorial.fullName}
                className="w-full h-56 object-cover"
              />
            ) : (
              <div className="w-full h-56 bg-gray-100 flex items-center justify-center text-gray-400">
                Kapak fotoğrafı yok
              </div>
            )}

            <div className="p-6">
              <h2 className="text-2xl font-semibold">{memorial.fullName}</h2>

              <p className="text-gray-500 mt-2">
                {memorial.birthDate || "?"} - {memorial.deathDate || "?"}
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