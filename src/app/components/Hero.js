"use client";
import Image from 'next/image';
import VideoPlayer from './VideoPlayer';
import useVideoPlayer from '../hooks/useVideoPlayer';

export default function Hero() {
  const {
    videoRef,
    isPlaying,
    hasStarted,
    togglePlay,
  } = useVideoPlayer();

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
      <div className="w-full max-w-4xl mx-auto relative bg-transparent rounded-2xl shadow-2xl shadow-purple-500/15">
        <VideoPlayer
          ref={videoRef}
          src="https://grtomatemedia.b-cdn.net/videomate%20VSL.mp4"
          poster="/vslThumbnail.webp"
          title="Videomate Promotional Video"
          hasStarted={hasStarted}
        />
        {!hasStarted && (
          <button
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
            onClick={togglePlay}
            onKeyDown={(e) => e.key === 'Enter' && togglePlay()}
            aria-label="Play video"
            tabIndex={0}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </button>
        )}
      </div>
      {/* CTA Button */}
      <a
        target="_blank"
        href="/call-booking"
        className="bg-gradient-to-r from-[#B47DFF] to-[#8F5CFF] text-white font-semibold text-base px-6 py-2.5 mt-6 rounded-full shadow-md transition hover:brightness-110 backdrop-blur-xl bg-white/10 border border-white/20"
      >
        Start 7-Day Free Trial
      </a>
    </section>
  );
}