function VideoSection({ videos }) {
  return (
    <section className="mt-24 mb-24">

      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-3xl md:text-4xl font-bold">
            Videolar
          </h2>

          <span className="text-gray-500">
            {videos.length} Video
          </span>

        </div>

        <div className="grid gap-10">

          {videos.map((video, index) => (
            <div
              key={index}
              className="
                aspect-video
                rounded-3xl
                overflow-hidden
                shadow-lg
                bg-black
              "
            >

              <iframe
                src={video}
                title={`video-${index}`}
                className="w-full h-full"
                allowFullScreen
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default VideoSection;