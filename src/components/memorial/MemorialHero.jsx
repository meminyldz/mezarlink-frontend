function MemorialHero({
  coverPhoto,
  profilePhoto,
  fullName,
  birthDate,
  deathDate,
}) {
  return (
    <section>

      {/* COVER IMAGE */}
      <div className="relative h-[300px] md:h-[450px] bg-gray-200">

        {coverPhoto ? (
          <img
            src={coverPhoto}
            alt={fullName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300" />
        )}

        <div className="absolute inset-0 bg-black/40" />

      </div>

      {/* PROFILE */}
      <div className="max-w-5xl mx-auto px-6">

        <div className="-mt-24 relative z-10 text-center">

          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt={fullName}
              className="
                w-40 h-40
                md:w-52 md:h-52
                rounded-full
                mx-auto
                border-8 border-white
                object-cover
                shadow-xl
              "
            />
          ) : (
            <div
              className="
                w-40 h-40
                md:w-52 md:h-52
                rounded-full
                mx-auto
                border-8 border-white
                bg-gray-300
                shadow-xl
                flex items-center justify-center
                text-5xl font-bold text-gray-500
              "
            >
              {fullName?.charAt(0) || "?"}
            </div>
          )}

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            {fullName}
          </h1>

          <p className="text-gray-500 text-lg md:text-xl mt-3">
            {birthDate || "?"} - {deathDate || "?"}
          </p>

        </div>

      </div>

    </section>
  );
}

export default MemorialHero;