'use client';
import Image from 'next/image';

export default function TrustedBy() {
  return (
    <section className="py-16 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-2xl font-semibold text-center text-white mb-12 ">
          Trusted by creators & marketers worldwide
        </h3>
        
        <div className="relative ">
          <div className="animate-scroll-rtl hover:pause gap-8">
            {/* First set of images */}
            <Image 
              src="/trustedby.png" 
              alt="Trusted by companies" 
              width={4000}
              height={256}
              quality={100}
              className="h-[40px] sm:h-[44px] md:h-[48px] lg:h-[56px] xl:h-[64px] w-auto object-contain flex-shrink-0"
            />
            <div className="w-8"></div>
            <Image 
              src="/trustedby.png" 
              alt="Trusted by companies" 
              width={4000}
              height={256}
              quality={100}
              className="h-[40px] sm:h-[44px] md:h-[48px] lg:h-[56px] xl:h-[64px] w-auto object-contain flex-shrink-0"
            />
            <div className="w-8"></div>
            {/* Second set of images for seamless loop */}
            <Image 
              src="/trustedby.png" 
              alt="Trusted by companies" 
              width={4000}
              height={256}
              quality={100}
              className="h-[40px] sm:h-[44px] md:h-[48px] lg:h-[56px] xl:h-[64px] w-auto object-contain flex-shrink-0"
            />
            <div className="w-8"></div>
            <Image 
              src="/trustedby.png" 
              alt="Trusted by companies" 
              width={4000}
              height={256}
              quality={100}
              className="h-[40px] sm:h-[44px] md:h-[48px] lg:h-[56px] xl:h-[64px] w-auto object-contain flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}