import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-8 pt-34 md:pt-36 bg-transparent">
      {/* Headline */}
      <h1 className="w-full text-[26px] md:text-5xl font-extrabold text-center text-white">
        <span className="bg-gradient-to-r from-[#B57FFE] to-[#ECECEC] text-transparent bg-clip-text">Unlimited Video Editing.</span>
        <br className="hidden md:block" />
        <span className="text-lg md:text-5xl mt-[-6px] md:mt-0 block">Next-Day Delivery.No Hidden Fees.</span>
      </h1>
      {/* Description */}
      <p className="w-full text-xs md:text-lg text-center text-white mt-2 mb-6 md:mb-8">
        Videomate edits your videos in 24–48 hours. One flat rate. No surprises.
      </p>

      {/* CTA Button */}
      <a
        target="_blank"
        href="https://calendly.com/videomatecreators/book-a-call-earn-views?month=2025-07"
        className="bg-gradient-to-r from-[#B47DFF] to-[#8F5CFF] text-white font-semibold text-base px-6 py-2.5 rounded-full shadow-md transition hover:brightness-110 backdrop-blur-xl bg-white/10 border border-white/20"
      >
        Start 7-Day Free Trial
      </a>
    </section>
  );
}