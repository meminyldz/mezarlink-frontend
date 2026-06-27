function Gallery({ photos }) {
  return (
    <section className="mt-24">

      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-3xl md:text-4xl font-bold">
            Fotoğraf Galerisi
          </h2>

          <span className="text-gray-500">
            {photos.length} Fotoğraf
          </span>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {photos.map((photo, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-3xl
                shadow-sm
                hover:shadow-xl
                transition
                duration-300
                bg-white
              "
            >

              <img
                src={photo}
                alt={`gallery-${index}`}
                className="
                  w-full
                  h-72
                  object-cover
                  hover:scale-105
                  transition
                  duration-500
                "
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;