import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Sevdiklerinizin
                <span className="block text-gray-500">
                  Hatırası Yaşamaya Devam Etsin
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-8">
                QR kod ile dijital anı sayfaları oluşturun.
                Fotoğraflar, videolar ve yaşam hikayeleri
                tek bir özel sayfada sonsuza kadar yaşasın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  to="/register"
                  className="bg-black text-white px-8 py-4 rounded-2xl text-center hover:bg-gray-800 transition"
                >
                  Hemen Başla
                </Link>

                <Link
                  to="/about"
                  className="border border-gray-300 px-8 py-4 rounded-2xl text-center hover:bg-gray-100 transition"
                >
                  Daha Fazla Bilgi
                </Link>
              </div>
            </div>

            <div>
              <img
                src="https://picsum.photos/700/500"
                alt="hero"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Özellikler
            </h2>

            <p className="text-gray-600 mt-4">
              Dijital anı sayfaları için ihtiyacınız olan her şey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">
                QR Kod
              </h3>

              <p className="text-gray-600 leading-7">
                Her mezar taşı için özel QR kod oluşturun.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">
                Fotoğraf & Video
              </h3>

              <p className="text-gray-600 leading-7">
                Sevdiklerinizin anılarını güvenle saklayın.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">
                Mobil Uyumlu
              </h3>

              <p className="text-gray-600 leading-7">
                Tüm cihazlarda hızlı ve modern deneyim.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default HomePage;