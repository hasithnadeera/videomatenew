'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function CaseStudies() {
  const videoRefs = useRef({});
  const [playingVideos, setPlayingVideos] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const caseStudies = [
    {
      id: 1,
      company: 'BigVU',
      logo: '/bigvu.svg',
      description: 'World no 1 teleprompter app',
      testimonial: '"Videomate helped us create and generate $780,000 through their ads."',
      videoUrl: 'https://www.loom.com/share/e26951bec2b3494f9efa31ba9a715f59?sid=9e4d8645-46eb-48cf-8a51-d5ab1461219b',
      stars: 5
    },
    {
      id: 2,
      company: 'Magal',
      logo: '/magal.svg', 
      description: 'Luxury jewelry brand',
      testimonial: '"Our conversion rates increased by 45% after implementing Videomate videos."',
      videoUrl: ' ',
      stars: 5
    },
    {
      id: 3,
      company: 'Minicaption',
      logo: '/minicaption.svg', 
      description: 'YouTuber',
      testimonial: '"Videomate delivered high-quality content that perfectly aligned with our brand voice."',
      videoUrl: 'https://grtomatemedia.b-cdn.net/philippe%20testimonial.mp4',
      stars: 5
    },
    {
      id: 4,
      company: 'Thera',
      logo: '/Thera.svg', 
      description: 'Health tech innovator',
      testimonial: '"The team at Videomate understood our complex product and communicated it clearly."',
      videoUrl: 'https://grtomatemedia.b-cdn.net/philippe%20testimonial.mp4',
      stars: 5
    },
    {
      id: 5,
      company: 'Stately',
      logo: '/stately.svg', // Changed from null to a path
      description: 'Social media agency',
      testimonial: '"Working with Videomate streamlined our entire video production process."',
      videoUrl: 'https://grtomatemedia.b-cdn.net/philippe%20testimonial.mp4',
      stars: 5
    }
  ];

  const togglePlay = (id) => {
    const videoElement = videoRefs.current[id];
    if (!videoElement) return;
    
    const isPlaying = playingVideos[id];
    
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    
    setPlayingVideos(prev => ({
      ...prev,
      [id]: !isPlaying
    }));
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden ">
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
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#E7D6FF] to-[#EEEEEE]">This is how we boost our clients&apos; results</h2>
        
        {/* Case Studies List - Vertical Layout */}
        <div className="space-y-12">
          {caseStudies.map((caseStudy, index) => (
            <div key={caseStudy.id} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Column - Company Info */}
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center">
                    <div className={`${caseStudy.company === 'Minicaption' || caseStudy.company === 'Thera' ? 'w-16 h-16' : 'w-20 h-20'} mr-4 relative flex-shrink-0 flex items-center justify-center`}>
                      <Image 
                        src={caseStudy.logo} 
                        alt={caseStudy.company} 
                        width={caseStudy.company === 'Minicaption' || caseStudy.company === 'Thera' ? 48 : 64} 
                        height={caseStudy.company === 'Minicaption' || caseStudy.company === 'Thera' ? 48 : 64}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{caseStudy.company}</h3>
                      <p className="text-sm text-gray-400">{caseStudy.description}</p>
                    </div>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex">
                    {[...Array(caseStudy.stars)].map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 -0.5 33 33"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#B47DFF"
                        className="w-5 h-5 mr-1"
                        aria-hidden="true"
                      >
                        <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 9.553 20.362 0.99 12.335 12.532 10.758 17.394 0 22.436 10.672 34 12.047 25.574 20.22" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Testimonial */}
                  <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                    {caseStudy.testimonial}
                  </p>
                </div>
                
                {/* Right Column - Video */}
                <div className="rounded-xl overflow-hidden aspect-video bg-black/40 relative">
                  {caseStudy.videoUrl ? (
                    caseStudy.videoUrl.includes('loom.com') ? (
                      <iframe
                        src={`https://www.loom.com/embed/${caseStudy.videoUrl.split('/').pop().split('?')[0]}`}
                        frameBorder="0"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    ) : (
                      <>
                        <video
                          className="w-full h-full object-cover"
                          ref={el => videoRefs.current[caseStudy.id] = el}
                          poster="/caseStidiesThumbnail.svg"
                          onEnded={() => setPlayingVideos(prev => ({ ...prev, [caseStudy.id]: false }))}
                        >
                          <source src={caseStudy.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        
                        {/* Fullscreen Button */}
                        <button
                          className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg z-10"
                          onClick={() => {
                            const videoElement = videoRefs.current[caseStudy.id];
                            if (videoElement) {
                              if (videoElement.requestFullscreen) {
                                videoElement.requestFullscreen();
                              } else if (videoElement.webkitRequestFullscreen) {
                                videoElement.webkitRequestFullscreen();
                              } else if (videoElement.msRequestFullscreen) {
                                videoElement.msRequestFullscreen();
                              }
                            }
                          }}
                          aria-label="Enter fullscreen"
                          tabIndex={0}
                        >
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </button>
                        
                        {/* Custom Play Button Overlay using the provided design */}
                        <button
                          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playingVideos[caseStudy.id] ? 'opacity-0' : 'opacity-100'}`}
                          onClick={() => togglePlay(caseStudy.id)}
                          onKeyDown={(e) => e.key === 'Enter' && togglePlay(caseStudy.id)}
                          aria-label={playingVideos[caseStudy.id] ? "Pause video" : "Play video"}
                          aria-pressed={playingVideos[caseStudy.id]}
                          tabIndex={0}
                        >
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg">
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </button>
                      </>
                    )
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/40 to-black/40">
                      <p className="text-white/70 text-center px-4">Case study video coming soon</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
