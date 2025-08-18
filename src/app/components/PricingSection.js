'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import ComparisonCard from './ComparisonCard';
import { COMPARISON_DATA } from '../constants';

export default function PricingSection() {
  const router = useRouter();
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [scrollContainer, setScrollContainer] = useState(null);

  // Add click handler for redirecting to the call-booking page
  const handlePricingCardClick = () => {
    window.open('/call-booking', '_blank');
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "$799",
      period: "/mo",
      features: [
        <>Active videos <span style={{color: '#BA88FF'}}>1</span></>,
        <>Turnaround <span style={{color: '#BA88FF'}}>24-48h</span></>
      ],
      extraFeatures: [
        "1080 p",
        "Captions"
      ],
      isPopular: false
    },
    {
      name: "Pro",
      price: "$1,399",
      period: "/mo",
      features: [
        <>Active videos <span style={{color: '#BA88FF'}}>2</span></>,
        <>Turnaround <span style={{color: '#BA88FF'}}>≤ 24h</span></>
      ],
      extraFeatures: [
        "Team Dashboard",
        "Slack Channel"
      ],
      isPopular: true
    },
    {
      name: "Agency",
      price: "$2,499",
      period: "/mo",
      features: [
        <>Active videos <span style={{color: '#BA88FF'}}>4</span></>,
        <>Turnaround <span style={{color: '#BA88FF'}}>≤ 24h</span></>
      ],
      extraFeatures: [
        "White label",
        "Motion GFX",
        "Team Dashboard"
      ],
      isPopular: false
    }
  ];

  // Enhanced comparison data with JSX for the highlighted item
  const comparisonData = COMPARISON_DATA.map(item => {
    if (item.isHighlighted) {
      return {
        ...item,
        description: (
          <>
            $16,788
            <span className="text-sm md:text-base text-white">
              / year—all-inclusive unlimited videos, zero headaches
            </span>
          </>
        )
      };
    }
    return item;
  });

  // Center Pro card on component mount
  useEffect(() => {
    if (scrollContainer) {
      // Calculate position to center Pro card (index 1)
      const cardWidth = 256; // All cards w-64 = 256px
      const spacing = 12; // space-x-3 = 12px
      const containerWidth = scrollContainer.clientWidth;
      const padding = 24; // px-6 = 24px on each side
      
      // Center the Pro card (index 1) in the viewport
      const scrollPosition = (cardWidth + spacing) - (containerWidth / 2) + (cardWidth / 2) + padding;
      
      scrollContainer.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'instant'
      });
    }
  }, [scrollContainer]);

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !scrollContainer) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    const scrollAmount = 100; // Reduced scroll amount for more precise navigation

    if (isLeftSwipe) {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    if (isRightSwipe) {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <section className="py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Pricing Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Plans <span className="text-3xl">&</span> Pricing
          </h2>
          <p className="text-xl text-gray-300">
            Flat, Transparent, Forever
          </p>
        </div>

        {/* Pricing Cards */}
        {/* Mobile: Side-by-side cards with swipe */}
        <div className="md:hidden mb-16">
          <div 
            ref={setScrollContainer}
            className="relative overflow-x-auto hide-scrollbar"
            style={{ 
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div 
              className="flex space-x-3 px-6 pb-4"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth'
              }}
            >
              {pricingPlans.map((plan, index) => (
                <div key={plan.name} className="flex-shrink-0 w-64" style={{ scrollSnapAlign: 'center' }}>
                  <div
                    onClick={handlePricingCardClick}
                    className={`relative backdrop-blur-xl rounded-4xl p-4 border overflow-hidden h-96 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      plan.name === 'Pro'
                        ? 'border-purple-400/20 shadow-xl'
                        : 'border-[#CFADFF]/30 shadow-xl'
                    }`}
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                      backdropFilter: 'blur(20px)'
                    }}
                  >
                    {/* Pro card shadow for mobile */}
                    {plan.isPopular && (
                      <div className="absolute bottom-0 left-0 -z-10">
                        <div 
                          className="w-85 h-125 rounded-full"
                          style={{
                            background: 'radial-gradient(circle at center, #814EC5 0%, rgba(129, 78, 197, 0.6) 40%, transparent 70%)',
                            filter: 'blur(100px)',
                            transform: 'translate(-25%, 25%)'
                          }}
                        ></div>
                      </div>
                    )}
                    
                    {/* Plan Name */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold" style={{
                        background: 'linear-gradient(to bottom, #E2CDFF, #B47DFF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        {plan.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-white">{plan.price}</span>
                        <span className="text-lg text-gray-400 font-bold ml-1">{plan.period}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="24" 
                              height="24" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="1" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="text-white w-5 h-5"
                            >
                              <circle cx="12" cy="12" r="10"/>
                              <path d="m10 8 4 4-4 4"/>
                            </svg>
                          </div>
                          <div className="text-gray-300 text-sm">{feature}</div>
                        </div>
                      ))}
                    </div>

                    {/* Extra Features */}
                    {plan.extraFeatures && (
                      <div className="pt-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Extra</h4>
                        <div className="space-y-3">
                          {plan.extraFeatures.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  width="24" 
                                  height="24" 
                                  viewBox="0 0 24 24" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  strokeWidth="1" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  className="text-white w-5 h-5"
                                >
                                  <circle cx="12" cy="12" r="10"/>
                                  <path d="m10 8 4 4-4 4"/>
                                </svg>
                              </div>
                              <div className="text-gray-300 text-sm">{feature}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* No navigation dots needed for side-by-side layout */}
          </div>
        </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
            {pricingPlans.map((plan, index) => (
            <div
              key={index}
              onClick={handlePricingCardClick}
              className={`relative backdrop-blur-xl rounded-4xl p-4 sm:p-6 md:p-8 border ${
                plan.isPopular 
                ? 'border-purple-400/20 md:scale-105 z-10 shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:border-purple-300/40 cursor-pointer' 
                : 'border-[#CFADFF]/30 md:scale-95 shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-purple-300/30 cursor-pointer'
              }`}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Pro card shadow at bottom left */}
              {plan.isPopular && (
                <div className="absolute bottom-0 left-0 -z-10">
                  <div 
                    className="w-85 h-125 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at center, #814EC5 0%, rgba(129, 78, 197, 0.6) 40%, transparent 70%)',
                      filter: 'blur(100px)',
                      transform: 'translate(-25%, 25%)'
                    }}
                  ></div>
                </div>
              )}
              
              {/* Plan Name */}
              <div className="mb-6">
                <h3 className="text-xl font-bold" style={{
                  background: 'linear-gradient(to bottom, #E2CDFF, #B47DFF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-lg sm:text-xl text-gray-400 font-bold ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 sm:space-y-4 mb-6 md:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-white w-5 h-5"
                      >
                        <circle cx="12" cy="12" r="10"/>
                        <path d="m10 8 4 4-4 4"/>
                      </svg>
                    </div>
                    <div className="text-gray-300">{feature}</div>
                  </div>
                ))}
              </div>

              {/* Extra Features */}
              <div className="pt-4 sm:pt-6">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Extra</h4>
                <div className="space-y-2 sm:space-y-3">
                  {plan.extraFeatures.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="text-white w-5 h-5"
                        >
                          <circle cx="12" cy="12" r="10"/>
                          <path d="m10 8 4 4-4 4"/>
                        </svg>
                      </div>
                      <div className="text-gray-300">{feature}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          ))}
        </div>
        {/* CFO Comparison Section */}
        <div className="flex flex-col items-center justify-center relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Why so affordable?</h2>
          <p className="max-w-3xl text-center text-base md:text-lg mb-8 text-gray-200">
            Our editors operate from Asia&apos;s creative hotbed—so you pay global-agency quality at Asia-based rates. No payroll. No office leases. Just pure editing horsepower.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-center">The Math That Makes CFOs Smile</h3>
          
          {/* Target Audience Section */}
          <div className="max-w-4xl mx-auto mt-12 px-4 relative">
            {/* Shadow behind the title */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <div 
                className="w-300 h-175 rounded-full blur-[200px]" 
                style={{ 
                  background: '#B47DFF', 
                  opacity: 0.2 
                }} 
              ></div>
            </div>
          </div>
          
          <div className="w-full max-w-2xl flex flex-col gap-4">
            {comparisonData.map((item, index) => (
              <ComparisonCard
                key={index}
                title={item.title}
                description={item.description}
                isHighlighted={item.isHighlighted}
              />
            ))}
          </div>
          <p className="mt-8 text-md text-gray-300 max-w-2xl text-center">
            <span className="font-semibold text-white">*You keep the savings</span>—and still get award-winning edits delivered on autopilot.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}