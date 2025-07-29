import React from 'react';

export default function ComparisonCard({ title, description, isHighlighted = false, className = '' }) {
  const baseClasses = "rounded-xl h-20 backdrop-blur-md relative overflow-hidden";
  const backgroundClasses = isHighlighted 
    ? "bg-gradient-to-r from-[#B47DFF] to-[#B47DFF]/5" 
    : "bg-white/10";
  
  const cardStyle = isHighlighted 
    ? {
        boxShadow: "0 4px 32px 0 rgba(180,125,255,0.15)"
      }
    : {};

  if (isHighlighted) {
    return (
      <div className="p-0.5 rounded-xl bg-gradient-to-r from-[#B47DFF] to-#CFADFF">
        <div 
          className={`${baseClasses} ${backgroundClasses} ${className}`}
          style={cardStyle}
        >
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{
              background: "linear-gradient(180deg, #B47DFF 100%, #B47DFF 4%)", 
              opacity: 0.18
            }} 
          />
          <div className="flex h-full relative z-10">
            <div className="flex-1 flex items-center px-6">
              <span className="font-semibold text-lg text-white">{title}</span>
            </div>
            <div className="w-px bg-white my-4"></div>
            <div className="flex-1 flex items-center px-6">
              <span className="text-sm md:text-base text-white">
                {description}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`${baseClasses} ${backgroundClasses} border-2 border-white/30 ${className}`}
      style={cardStyle}
    >
      <div className="flex h-full relative z-10">
        <div className="flex-1 flex items-center px-6">
          <span className="font-semibold text-lg text-white">{title}</span>
        </div>
        <div className="w-px bg-white my-4"></div>
        <div className="flex-1 flex items-center px-6">
          <span className="text-sm md:text-base text-white">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}