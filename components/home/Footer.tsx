import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h2 className="text-3xl font-black text-white">
              SmartLens
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Capturing timeless stories through photography,
              videography, drone coverage and livestream
              production.
            </p>

          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">
              Navigation
            </h3>

            <div className="space-y-3 text-gray-400">

              <Link href="/">Home</Link><br />
              <Link href="/portfolio">Portfolio</Link><br />
              <Link href="/services">Services</Link><br />
              <Link href="/contact">Contact</Link>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-xl mb-6">
              Services
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>Photography</p>
              <p>Videography</p>
              <p>Drone Coverage</p>
              <p>Livestream</p>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-xl mb-6">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>Nairobi, Kenya</p>
              <p>+254 116882878</p>
              <p>smartlens22157@gmail.com</p>

            </div>

          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} SmartLens Media. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}