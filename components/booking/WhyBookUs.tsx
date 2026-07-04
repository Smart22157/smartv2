export default function WhyBookUs() {
  const features = [
    "Professional Photography",
    "Cinematic Videography",
    "Drone Coverage",
    "Livestream Services",
    "Fast Delivery",
    "Creative Storytelling",
  ];

  return (
    <section className="bg-black py-24">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-black">
          Why Choose SmartLens?
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {features.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition hover:border-red-500"
            >
              <h3 className="text-2xl font-bold">{item}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}