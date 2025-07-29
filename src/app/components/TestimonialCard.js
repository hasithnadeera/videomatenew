'use client';

import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { TESTIMONIAL_STYLES } from '../constants';
import useVideoPlayer from '../hooks/useVideoPlayer';

function TestimonialCard({ testimonial }) {
  const { stars, quote, name, title, avatar, videoUrl } = testimonial;
  const hasQuote = !!quote;
  
  const {
    videoRef,
    isPlaying,
    isLoading,
    error,
    togglePlay,
    handleLoadedData,
    handleError,
    setIsPlaying
  } = useVideoPlayer();
  
  if (hasQuote) {
    // Text testimonial - compact design with mobile optimization
    return (
      <div className="rounded-2xl bg-white/20 backdrop-blur-sm border border-white/40 p-4 md:p-6 h-fit">
        {/* Stars */}
        <div className="flex mb-3 md:mb-4">
          {[...Array(stars)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-purple-400 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Quote */}
        <p className="text-white text-sm md:text-base leading-relaxed mb-4 md:mb-6 font-normal">{quote}</p>
        
        {/* Author info */}
        <div className="flex items-center justify-between">
          <div className="text-left">
            <p className="font-medium text-white text-lg md:text-xl">{name}</p>
            <p className="text-xs md:text-sm text-gray-400">{title}</p>
          </div>
          {avatar && (
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden relative ml-4 flex-shrink-0">
              <Image 
                src={avatar} 
                alt={name}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
  
  // Video testimonial - 9:16 aspect ratio
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
      <div className="relative w-full aspect-[9/16]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
            <div className="w-6 h-6 border-3 border-purple-500/50 border-t-purple-500 rounded-full animate-spin"></div>
          </div>
        )}
        
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
            <p className="text-red-400 text-xs text-center px-2">Unable to load video</p>
          </div>
        )}
        
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedData={handleLoadedData}
          onError={handleError}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        {/* Play button */}
        <button 
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
          onClick={togglePlay}
          onKeyDown={(e) => e.key === 'Enter' && togglePlay()}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          aria-pressed={isPlaying}
          tabIndex={0}
        >
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </button>
        
        {/* Author info overlay at bottom */}
        {name && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 md:p-3">
            <p className="font-semibold text-white text-lg md:text-xl">{name}</p>
            <p className="text-xs md:text-sm text-gray-300">{title}</p>
          </div>
        )}
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number,
    stars: PropTypes.number,
    quote: PropTypes.string,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    videoUrl: PropTypes.string
  }).isRequired
};

export default React.memo(TestimonialCard);