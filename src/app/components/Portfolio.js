'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

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
    <div className="relative w-full mb-4 mt-12">
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
          className={`flex space-x-8 px-6 w-max ${isUserInteracting ? '' : 'animate-scroll-rtl'
            }`}
        >
          {/* Repeat the GIF multiple times for the scrolling effect */}
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Thera_Sampal-01_3_ed17y3_loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Wegovy_eufixx_loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/5.Smart_People_Take_This_hp0o1a-loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/11_ticzaj_loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Fannie_mae_1_mbjtldloop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Ali_Abdaal_Style_daummp-loop.gif" />         
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Kenton_ovtxqw_loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Tyler_Scott_Win_1_zbonux_loop.gif" />
          
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Thera_Sampal-01_3_ed17y3_loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Wegovy_eufixx_loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/5.Smart_People_Take_This_hp0o1a-loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/11_ticzaj_loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Fannie_mae_1_mbjtldloop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Ali_Abdaal_Style_daummp-loop.gif" />         
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Kenton_ovtxqw_loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Tyler_Scott_Win_1_zbonux_loop.gif" />

          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Thera_Sampal-01_3_ed17y3_loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Wegovy_eufixx_loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/5.Smart_People_Take_This_hp0o1a-loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/11_ticzaj_loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Fannie_mae_1_mbjtldloop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Ali_Abdaal_Style_daummp-loop.gif" />         
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Kenton_ovtxqw_loop.gif" />
          <GifCard src="https://grtomatemedia.b-cdn.net/gifs/Tyler_Scott_Win_1_zbonux_loop.gif" />
          
          
          

       
        </div>
      </div>
    </div>
  )
}

const GifCard = ({ src }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div
      className="flex-shrink-0 w-[160px] h-[284px] md:w-[215px] md:h-[382px] rounded-xl shadow-lg overflow-hidden 
        transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 relative"
    >
      <Image
        className="w-full h-full object-cover"
        src={src}
        alt="Portfolio GIF"
        width={215}
        height={382}
        onError={handleError}
        style={{
          imageRendering: 'auto',
          animation: 'none'
        }}
      />
      
      {/* Error State Only */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
          <div className="text-center">
            <div className="w-6 h-6 text-red-400 mb-2">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <p className="text-white/60 text-xs">Failed to load</p>
            <button 
              onClick={() => {
                setHasError(false);
                // Force reload by changing src
                const img = document.querySelector(`img[src="${src}"]`);
                if (img) {
                  img.src = src + '?t=' + Date.now();
                }
              }}
              className="text-[#B47DFF] text-xs mt-1 hover:underline"
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};