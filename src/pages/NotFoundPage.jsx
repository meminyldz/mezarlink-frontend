import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-7xl font-bold">
        404
      </h1>

      <p className="text-gray-600 mt-4 text-xl">
        Sayfa bulunamadı
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

export default NotFoundPage;