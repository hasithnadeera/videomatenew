'use client';
import { useState, useRef, useEffect } from 'react';

export default function Portfolio() {
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleInteractionStart = () => {
    setIsUserInteracting(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleInteractionEnd = () => {
    // Resume animation after 2 seconds of no interaction
    timeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 2000);
  };

  const handleScroll = () => {
    handleInteractionStart();
    handleInteractionEnd();
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full mb-4">
      <div 
        ref={containerRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide"
        onScroll={handleScroll}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div 
          className={`flex space-x-8 py-8 px-6 w-max ${
            isUserInteracting ? '' : 'animate-scroll-rtl'
          }`}
        >
          <VideoCard src="https://grtomatemedia.b-cdn.net/10.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/11.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/13.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/14.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/15.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/2.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/3.mp4" />
          
          <VideoCard src="https://grtomatemedia.b-cdn.net/4.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/5.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/7.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/9.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/A.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/10.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/11.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/10.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/11.mp4" />
  
          <VideoCard src="https://grtomatemedia.b-cdn.net/13.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/14.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/15.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/2.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/3.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/4.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/5.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/7.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/9.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/A.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/10.mp4" />
          <VideoCard src="https://grtomatemedia.b-cdn.net/11.mp4" />

        </div>
      </div>
    </div>
  )
}

const VideoCard = ({ src }) => (
  <div 
    className="flex-shrink-0 w-[160px] h-[284px] md:w-[215px] md:h-[382px] rounded-xl shadow-lg overflow-hidden 
      transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1" 
  > 
    <video 
      className="w-full h-full object-cover" 
      src={src} 
      autoPlay 
      muted 
      loop 
      playsInline 
      controls={false} 
      disablePictureInPicture 
    /> 
  </div> 
);