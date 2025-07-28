import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-[80vh] px-8 py-12 bg-transparent md:mt-24 mt-16">
      {/* Headline */}
      <h1 className="w-full text-[26px] md:text-5xl font-extrabold text-center text-white">
        <span className="bg-gradient-to-r from-[#B57FFE] to-[#ECECEC] text-transparent bg-clip-text">Unlimited Video Editing.</span>
        <br className="hidden md:block" />
        <span className="text-lg md:text-5xl mt-[-6px] md:mt-0 block">Next-Day Delivery.No Hidden Fees.</span>
      </h1>
      {/* Description */}
      <p className="w-full text-xs md:text-lg text-center text-white mt-2 mb-8">
        Outsource the timelines—keep the spotlight. Videomate edits your raw footage into<br />
        scroll-stopping videos in 24–48 hours, for one flat rate that never creeps up.
      </p>
      {/* Video Thumbnail */}
      <div className="relative w-full max-w-3xl mx-auto aspect-video mb-8 flex items-center justify-center">
        {/* Animated colored shadow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="rounded-2xl w-[110%] h-[110%] bg-[#B47DFF] blur-3xl opacity-60 animate-glow"></div>
        </div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden z-10">
          <iframe
            src="https://www.youtube.com/embed/6KB9h-FcD8Q"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full rounded-2xl"
          ></iframe>
        </div>
      </div>
      {/* CTA Button */}
      <a
        href="#"
        className="bg-gradient-to-r from-[#B47DFF] to-[#8F5CFF] text-white font-semibold text-base px-6 py-2.5 rounded-full shadow-md transition hover:brightness-110 backdrop-blur-xl bg-white/10 border border-white/20"
      >
        Start 7-Day Free Trial
      </a>
    </section>
  );
}