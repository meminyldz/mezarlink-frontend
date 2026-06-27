function Biography({ biography }) {
  return (
    <section className="mt-20">

      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Hayatı
        </h2>

        <div
          className="
            text-gray-700
            leading-9
            text-lg
            space-y-6
          "
        >
          <p>
            {biography}
          </p>
        </div>

      </div>

    </section>
  );
}

export default Biography;