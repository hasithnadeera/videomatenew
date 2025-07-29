'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HowItWorks() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  return (
    <section className="py-12 px-6 relative overflow-hidden">
      {/* Left side shadow - half circle - responsive */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-0">
        <div 
          className="w-80 h-64 md:w-[900px] md:h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, #B47DFF 0%, #8B5CF6 30%, rgba(139, 92, 246, 0.4) 60%, transparent 100%)',
            filter: isMobile ? 'blur(80px)' : 'blur(180px)',
            opacity: 0.3,
            transform: 'translateX(-50%)'
          }}
        ></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">
          How it works
        </h2>

        {/* How It Works SVG */}
        <div className="flex justify-center items-center">
          <Image
            src="/how it works.svg"
            alt="How it works process diagram"
            width={800}
            height={600}
            className="w-full max-w-4xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}