import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import api from "../api/axios";
import MemorialHero from "../components/memorial/MemorialHero";
import Biography from "../components/memorial/Biography";
import Gallery from "../components/memorial/Gallery";
import VideoSection from "../components/memorial/VideoSection";
import DiscoverSection from "../components/memorial/DiscoverSection";

function MemorialPage() {
  const { slug } = useParams();
  const [memorial, setMemorial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setNotFound(false);

    api
      .get(`/memorials/${slug}`)
      .then((response) => {
        if (isMounted) setMemorial(response.data);
      })
      .catch(() => {
        if (isMounted) setNotFound(true);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
        Yükleniyor...
      </div>
    );
  }

  if (notFound || !memorial) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold">Anı sayfası bulunamadı</h1>
        <p className="text-gray-500 mt-3">
          Bu QR kod ile ilişkili bir anı sayfası bulunamadı.
        </p>
        <Link
          to="/"
          className="mt-8 bg-black text-white px-8 py-4 rounded-2xl"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <MemorialHero
        coverPhoto={memorial.coverPhoto}
        profilePhoto={memorial.profilePhoto}
        fullName={memorial.fullName}
        birthDate={memorial.birthDate}
        deathDate={memorial.deathDate}
      />

      <div className="max-w-5xl mx-auto px-6">
        <Biography biography={memorial.biography || "Henüz biyografi eklenmedi."} />

        {memorial.photos?.length > 0 && (
          <Gallery photos={memorial.photos} />
        )}

        {memorial.videos?.length > 0 && (
          <VideoSection videos={memorial.videos} />
        )}
      </div>

      <DiscoverSection />
    </div>
  );
}

export default MemorialPage;