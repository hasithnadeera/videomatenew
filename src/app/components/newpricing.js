import React from 'react';

export default function NewPricing() {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        Need Pay-Per-Video Bundle?
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div
          className="relative backdrop-blur-xl rounded-3xl p-6 border border-purple-400/20 shadow-xl overflow-hidden cursor-pointer flex flex-col justify-between h-[420px] w-[300px]"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">1 short-form video per month</h3>
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-6xl font-bold text-white">$47</span>
            </div>
            <p className="text-lg text-gray-400 line-through">$97</p>
          </div>
          <div className="text-center">
            <div className="text-gray-300 mb-4">
              <p>2 free revisions</p>
              <p>Turnaround 24-48 h</p>
            </div>
            <p className="text-4xl font-bold text-white">50% off</p>
          </div>
        </div>
        {/* Card 2 */}
        <div
          className="relative backdrop-blur-xl rounded-3xl p-6 border border-purple-400/20 shadow-xl overflow-hidden cursor-pointer flex flex-col justify-between h-[420px] w-[300px]"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">8 videos per month</h3>
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-6xl font-bold text-white">$697</span>
            </div>
            <p className="text-lg text-gray-400 line-through">$776</p>
          </div>
          <div className="text-center">
            <div className="text-gray-300 mb-4">
              <p>2 free revisions</p>
              <p>Turnaround <24 h</p>
            </div>
            <p className="text-4xl font-bold text-white">10% off</p>
          </div>
        </div>
        {/* Card 3 */}
        <div
          className="relative backdrop-blur-xl rounded-3xl p-6 border border-purple-400/20 shadow-xl overflow-hidden cursor-pointer flex flex-col justify-between h-[420px] w-[300px]"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">30 videos per month</h3>
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-6xl font-bold text-white">$2247</span>
            </div>
            <p className="text-lg text-gray-400 line-through">$2910</p>
          </div>
          <div className="text-center">
            <div className="text-gray-300 mb-4">
              <p>2 free revisions</p>
              <p>Turnaround <48 h</p>
            </div>
            <p className="text-4xl font-bold text-white">22% off</p>
          </div>
        </div>
      </div>
    </div>
  );
}