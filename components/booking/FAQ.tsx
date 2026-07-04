export default function FAQ() {
  return (
    <section className="bg-[#050505] py-24">

      <div className="mx-auto max-w-4xl px-6">

        <h2 className="text-center text-5xl font-black">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-8">

          <div className="rounded-3xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold">
              How long does it take to receive our photos?
            </h3>

            <p className="mt-4 text-gray-400">
              Delivery time depends on the project, but most galleries are delivered within 2–4 weeks.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold">
              Do you travel outside Kenya?
            </h3>

            <p className="mt-4 text-gray-400">
              Yes. We are available for destination events and productions across Kenya and beyond.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold">
              Can we request drone coverage?
            </h3>

            <p className="mt-4 text-gray-400">
              Absolutely. Drone coverage can be included where regulations and weather permit.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}