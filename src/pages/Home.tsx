import React from 'react';
import { ArrowRight, Star, Coffee, MapPin, Clock } from 'lucide-react';
interface HomeProps {
  onNavigate: (page: string) => void;
}
export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1400&q=80"
            alt="Pour over coffee dark"
            className="w-full h-full object-cover" />

        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <p className="text-white font-mono tracking-[0.3em] text-sm md:text-base mb-6 uppercase">
            Est. 2024 • Brooklyn, NY
          </p>
          <h1 className="text-white font-serif text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter leading-[0.9] mb-8 mix-blend-difference">
            MIDNIGHT
            <br />
            BREW
          </h1>
          <p className="text-gray-300 max-w-md mx-auto font-serif text-xl md:text-2xl italic mb-12 leading-relaxed">
            "Coffee for the night owls, the dreamers, and the deadline chasers."
          </p>
          <button
            onClick={() => onNavigate('menu')}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">

            View Menu
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white font-mono text-xs animate-bounce">
          SCROLL DOWN
        </div>
      </section>

      {/* Editorial Grid Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t-4 border-black pt-8">
          {/* Left Column - Text */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 leading-none">
                THE
                <br />
                DARK
                <br />
                ROAST
              </h2>
              <div className="w-16 h-2 bg-black mb-8"></div>
              <p className="font-mono text-sm leading-relaxed mb-6 text-gray-800">
                We don't just brew coffee; we curate an atmosphere. Inspired by
                the late-night diners of the 80s and the brutalist architecture
                of modern galleries, Midnight Brew is a sanctuary for those who
                thrive after dark.
              </p>
              <p className="font-mono text-sm leading-relaxed text-gray-800">
                Our beans are sourced directly from micro-lots in Ethiopia and
                Colombia, roasted in small batches to preserve their complex,
                dark profiles.
              </p>
            </div>

            <div className="mt-12 p-6 border-2 border-black rotate-1 inline-block bg-[#f5f0e8] max-w-xs">
              <p className="font-serif italic text-xl text-center">
                "Best espresso in the city, hands down."
              </p>
              <p className="font-mono text-xs text-center mt-2 uppercase tracking-widest">
                — NY Times
              </p>
            </div>
          </div>

          {/* Middle/Right Column - Imagery & Info */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[500px] border-2 border-black">
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80"
                alt="Barista pouring latte art"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />

              <div className="absolute bottom-0 left-0 bg-black text-white px-4 py-2 font-mono text-xs uppercase">
                Fig. 01 — The Pour
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="bg-black text-white p-8 flex-1">
                <Clock className="w-8 h-8 mb-4" />
                <h3 className="font-serif text-2xl mb-4">HOURS</h3>
                <ul className="font-mono text-sm space-y-2">
                  <li className="flex justify-between">
                    <span>MON-FRI</span> <span>7AM — 12AM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>SAT-SUN</span> <span>8AM — 2AM</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-black p-8 flex-1">
                <MapPin className="w-8 h-8 mb-4" />
                <h3 className="font-serif text-2xl mb-4">LOCATION</h3>
                <address className="font-mono text-sm not-italic">
                  142 Bedford Ave
                  <br />
                  Brooklyn, NY 11211
                  <br />
                  <br />
                  <a href="#" className="underline hover:no-underline">
                    Get Directions →
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews / Zine Section */}
      <section className="bg-[#f5f0e8] py-24 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-16 border-b-2 border-black pb-4">
            <h2 className="font-serif text-4xl md:text-6xl font-bold">
              THE WORD
            </h2>
            <span className="font-mono text-xs uppercase border border-black px-2 py-1">
              Vol. 04
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              text: "The atmosphere is unmatched. It's like stepping into a noir film, but with better coffee.",
              author: 'Sarah J.',
              role: 'Designer'
            },
            {
              text: 'Finally, a place that takes black coffee seriously. No syrups, no nonsense.',
              author: 'Marcus R.',
              role: 'Writer'
            },
            {
              text: 'I wrote my entire thesis here. The cold brew is rocket fuel.',
              author: 'Elena K.',
              role: 'Student'
            }].
            map((review, i) =>
            <div
              key={i}
              className="relative bg-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">

                <div className="absolute -top-4 -right-4">
                  <Star className="w-8 h-8 fill-black text-black" />
                </div>
                <p className="font-serif text-xl italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black flex items-center justify-center text-white font-mono font-bold">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="font-bold font-mono text-sm uppercase">
                      {review.author}
                    </p>
                    <p className="text-xs font-mono text-gray-500">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white text-center px-4">
        <h2 className="font-serif text-5xl md:text-7xl mb-8">WAKE UP.</h2>
        <p className="font-mono text-gray-400 mb-12 max-w-xl mx-auto">
          Join us for a cup. Or order beans to your door.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('menu')}
            className="px-8 py-4 bg-white text-black font-mono font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">

            See Menu
          </button>
          <button
            onClick={() => onNavigate('catalog')}
            className="px-8 py-4 border border-white text-white font-mono font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">

            Shop Beans
          </button>
        </div>
      </section>
    </div>);

}