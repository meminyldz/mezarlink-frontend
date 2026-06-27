import { useParams, Link } from "react-router-dom";

import MemorialHero from "../components/memorial/MemorialHero";
import Biography from "../components/memorial/Biography";
import Gallery from "../components/memorial/Gallery";
import VideoSection from "../components/memorial/VideoSection";
import DiscoverSection from "../components/memorial/DiscoverSection";

import { getMemorialBySlug } from "../data/mockMemorials";

function MemorialPage() {
  const { slug } = useParams();
  const memorial = getMemorialBySlug(slug);

  if (!memorial) {
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
        <Biography biography={memorial.biography} />

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
