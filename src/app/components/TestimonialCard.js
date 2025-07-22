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
  
  return (
    <div className={hasQuote ? TESTIMONIAL_STYLES.container : ""}>
      {hasQuote ? (
        <div className="p-6 flex flex-col h-full">
          <div className="flex mb-3">
            {[...Array(stars)].map((_, i) => (
              <svg key={i} className={TESTIMONIAL_STYLES.starIcon} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <p className="text-lg mb-6 flex-grow">{quote}</p>
          
          <div className="flex items-center justify-end">
            <div className="text-right mr-3">
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-400">{title}</p>
            </div>
            {avatar && (
              <div className="w-10 h-10 rounded-full overflow-hidden relative">
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
      ) : (
        <div className={`${TESTIMONIAL_STYLES.videoContainer} h-[500px] max-w-[280px] mx-auto`}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-purple-500/50 border-t-purple-500 rounded-full animate-spin"></div>
            </div>
          )}
          
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
              <p className="text-red-400 text-sm text-center px-2">Unable to load video</p>
            </div>
          )}
          
          <video 
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            poster="/video-thumbnail.jpg"
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onLoadedData={handleLoadedData}
            onError={handleError}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          
          <button 
            className={`${TESTIMONIAL_STYLES.playButton} ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
            onClick={togglePlay}
            onKeyDown={(e) => e.key === 'Enter' && togglePlay()}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            aria-pressed={isPlaying}
            tabIndex={0}
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </button>
          
          {name && (
            <div className="absolute bottom-4 left-4 z-10 text-white">
              <p className="font-semibold text-lg">{name}</p>
              <p className="text-sm text-gray-300">{title}</p>
            </div>
          )}
        </div>
      )}
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