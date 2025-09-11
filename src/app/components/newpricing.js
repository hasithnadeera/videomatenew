import React, { useRef } from 'react';

export default function NewPricing() {
  const scrollContainerRef = useRef(null);
  let startX = 0;
  let scrollLeft = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft = scrollContainerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed as needed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    startX = 0;
  };

  const handlePricingCardClick = (plan) => {
    // Handle card click - can be expanded for navigation or actions
    console.log('Clicked plan:', plan.name);
  };

  const pricingPlans = [
    {
      name: 'Basic',
      title: '1 short-form video',
      price: '$47',
      original: '$97',
      discount: '50% off',
      features: ['2 free revisions', 'Turnaround 24-48 h'],
      isPopular: false
    },
    {
      name: 'Pro',
      title: '8 videos per month',
      price: '$697',
      original: '$776',
      discount: '10% off',
      features: ['2 free revisions', 'Turnaround ≤ 24h'],
      isPopular: true
    },
    {
      name: 'Premium',
      title: '30 videos per month',
      price: '$2247',
      original: '$2910',
      discount: '22% off',
      features: ['2 free revisions', 'Turnaround ≤ 24h'],
      isPopular: false
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
        Need Pay-Per-Video Bundle?
      </h2>
      
      {/* Mobile Version */}
      <div className="md:hidden mb-16 w-full bg-black">
        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto scrollbar-hide"
          style={{
            WebkitOverflowScrolling: 'touch'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex space-x-3 px-6 pb-4"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth'
            }}
          >
            {pricingPlans.map((plan, index) => (
              <div key={plan.name} className="flex-shrink-0 w-64" style={{ scrollSnapAlign: 'center' }}>
                <div
                  onClick={() => handlePricingCardClick(plan)}
                  className="relative backdrop-blur-xl rounded-4xl p-4 border border-[#CFADFF]/30 shadow-xl overflow-hidden h-96 cursor-pointer transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gradient mt-4 mb-4">{plan.title}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                    </div>
                    <p className="text-lg text-gray-400 line-through">{plan.original}</p>
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-gray-300 mb-4">
                      {plan.features.map((feature, idx) => (
                        <p key={idx}>{feature}</p>
                      ))}
                    </div>
                    <p className="text-2xl font-bold text-white">{plan.discount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Desktop Version */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={plan.name}
            className="relative backdrop-blur-xl rounded-3xl p-6 border border-purple-400/20 shadow-xl overflow-hidden cursor-pointer flex flex-col justify-between h-[420px] w-[300px]"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gradient mt-10 mb-4">{plan.title}</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
              </div>
              <p className="text-lg text-gray-400 line-through">{plan.original}</p>
            </div>
            <div className="text-center">
              <div className="text-gray-300 mb-4">
                {plan.features.map((feature, idx) => (
                  <p key={idx}>{feature}</p>
                ))}
              </div>
              <p className="text-3xl font-bold text-white mb-10">{plan.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}