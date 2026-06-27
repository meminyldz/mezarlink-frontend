function DiscoverSection() {
  return (
    <section className="bg-gray-50 mt-24 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Siz de bir anı sayfası oluşturun
        </h2>

        <p className="text-gray-600 mt-4 leading-7">
          MezarLink ile sevdiklerinizin fotoğraflarını, videolarını ve
          hayat hikayesini dijital bir anı sayfasında sonsuza kadar
          yaşatın. Mezar taşına yapıştırılan QR kod ile herkes
          ziyaret edebilir.
        </p>

        <a
          href="https://www.mezarlink.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition"
        >
          MezarLink'i Keşfedin
        </a>
      </div>
    </section>
  );
}

export default DiscoverSection;
