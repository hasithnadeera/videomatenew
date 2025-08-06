'use client';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const portfolioCategories = {
    'Short-Form Videos': {
      aspectRatio: '9:16',
      videos: [
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Short-Form%20Videos/1.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Short-Form%20Videos/short%20form%202.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Short-Form%20Videos/short%204.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Short-Form%20Videos/4.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Short-Form%20Videos/shortform%201.mp4',
      ]
    },
    'Facebook Ads': {
      aspectRatio: '9:16',
      videos: [
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Facebook%20Ads/FB%20ad%204.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Facebook%20Ads/FB%20ad%201.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Facebook%20Ads/3.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Facebook%20Ads/4.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Facebook%20Ads/FB%20ad%205.mp4',
      ]
    },
    'Animated Explainers': {
      aspectRatio: '16:9',
      videos: [
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Animated%20Explainers/1.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Animated%20Explainers/2.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Animated%20Explainers/3.mp4',
      ]
    },
    'Challenges and Competitions': {
      aspectRatio: '16:9',
      videos: [
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Challenges%20and%20Competitions/1.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Challenges%20and%20Competitions/2.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Challenges%20and%20Competitions/3.mp4',
      ]
    },
    'Event Recaps': {
      aspectRatio: '9:16',
      videos: [
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Event%20Recaps/1.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Event%20Recaps/2.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Event%20Recaps/3.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Event%20Recaps/4.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Event%20Recaps/5.mp4'
      ]
    },
    'Long form Youtube videos': {
      aspectRatio: '16:9',
      videos: [
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Long%20form%20Youtube%20videos/homepage%20long.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Long%20form%20Youtube%20videos/long%20form%20yt.mp4',  
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Long%20form%20Youtube%20videos/3.mp4',
      ]
    },
    'Tutorials and How-To Videos': {
      aspectRatio: '16:9',
      videos: [
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Tutorials%20and%20How-To%20Videos/1.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Tutorials%20and%20How-To%20Videos/2.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Tutorials%20and%20How-To%20Videos/tutorial.mp4',
      ]
    },
    'User Testimonials': {
      aspectRatio: '9:16',
      videos: [
                "https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/User%20Testimonials/testimonilas%203.mp4",
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/User%20Testimonials/testimonilas%201.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/User%20Testimonials/testimonials%204.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/User%20Testimonials/UGC%2001.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/User%20Testimonials/UGC%2003.mp4',


      ]
    },
    'Vlogs and Day in the life videos': {
      aspectRatio: '16:9',
      videos: [
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Vlogs%20and%20Day%20in%20the%20life%20videos/1.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Vlogs%20and%20Day%20in%20the%20life%20videos/2.mp4',
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/Vlogs%20and%20Day%20in%20the%20life%20videos/3.mp4',
      ]
    },
    'VSL':{
      aspectRatio: '16:9',
      videos: [
        'https://grtomatemedia.b-cdn.net/Portfolio%20Videomate/VSL/VSL.mp4',
      ]
    }
  };

  const categoryKeys = Object.keys(portfolioCategories);
  const allCategories = ['All', ...categoryKeys];

  const scrollToCategory = (category) => {
    if (category === 'All') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(`category-${category.replace(/\s+/g, '-').toLowerCase()}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setActiveCategory(category);
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-[#150A28] to-black">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-36 pb-4 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#E2CDFF] to-[#B47DFF] bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h1>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="px-6 mb-8 hidden md:block">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => scrollToCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#B47DFF] to-[#8F5CFF] text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-xl text-white/80 hover:text-white hover:bg-white/20 border border-[#CFADFF]/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* All Categories Displayed Vertically */}
      <div className="px-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-16">
          {categoryKeys.map((category) => (
            <div 
              key={category}
              id={`category-${category.replace(/\s+/g, '-').toLowerCase()}`}
              className="scroll-mt-32"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {category}
              </h2>
              
              <div className={`grid gap-8 justify-items-center ${
                portfolioCategories[category].aspectRatio === '16:9'
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2'
                  : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
              }`}>
                {portfolioCategories[category].videos.map((videoSrc, index) => (
                  <VideoCard 
                    key={index} 
                    src={videoSrc} 
                    aspectRatio={portfolioCategories[category].aspectRatio}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function VideoCard({ src, aspectRatio }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (videoRef.current && isInView) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, isInView]);

  return (
    <div 
      ref={containerRef}
      className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-xl border border-[#CFADFF]/20 hover:border-[#CFADFF]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className={`relative ${
        aspectRatio === '16:9' 
          ? 'aspect-video' 
          : 'aspect-[9/16]'
      }`}>
        {isInView ? (
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover"
            loop
            playsInline
            preload="metadata"
            onLoadedData={handleLoadedData}
          />
        ) : (
          <div className="w-full h-full bg-gray-800/50 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-[#B47DFF] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Loading State */}
        {isInView && !isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
            <div className="w-8 h-8 border-2 border-[#B47DFF] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Play/Pause Overlay */}
        {isInView && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            onClick={handleVideoClick}
          >
            <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
              {isPlaying ? (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}