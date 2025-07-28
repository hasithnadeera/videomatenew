'use client';
import React, { lazy, Suspense } from 'react';
import Image from 'next/image';
import { TESTIMONIALS_DATA } from '../constants';
import ErrorBoundary from './ErrorBoundary';

// Lazy load the TestimonialCard component
const TestimonialCard = lazy(() => import('./TestimonialCard'));

export default function Testimonials() {
  // Using testimonials data from constants
  const testimonials = TESTIMONIALS_DATA;

  // Integration tools data
  const integrationTools = [
    {
      name: "Slack",
      logo: "/slack.png",
      description: "DM your editor like they're in the next cubicle."
    },
    {
      name: "Notion",
      logo: "/notion.png",
      description: "Transparent queue, real-time status."
    },
    {
      name: "Frame.io",
      logo: "/frameio.png",
      description: "Timestamp comments: no messy email chains."
    },
    {
      name: "Adobe CC",
      logo: "/adobe.png",
      description: "Hollywood-grade polish on every frame."
    }
  ];

  return (
    <section className="py-16 px-4 relative overflow-x-hidden">
      {/* Right side shadow - half circle */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-0">
        <div 
          className="w-250 h-350 rounded-full" 
          style={{ 
            background: 'radial-gradient(circle at center, #B47DFF 0%, #8B5CF6 30%, rgba(139, 92, 246, 0.4) 60%, transparent 100%)', 
            filter: 'blur(100px)', 
            opacity: 0.175, 
            transform: 'translateX(50%)' 
          }} 
        ></div>
      </div>

      {/* Testimonials Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white relative z-10">Success Stories</h2>
      <div className="max-w-4xl mx-auto relative z-10 mb-20">
        {/* Two-column masonry layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Text testimonial - short */}
            <ErrorBoundary>
              <Suspense fallback={<div className="animate-pulse h-64 bg-white/5 rounded-2xl"></div>}>
                <TestimonialCard testimonial={testimonials[0]} />
              </Suspense>
            </ErrorBoundary>
            
            {/* Video testimonial - tall */}
            <ErrorBoundary>
              <Suspense fallback={<div className="animate-pulse h-96 bg-white/5 rounded-2xl"></div>}>
                <TestimonialCard testimonial={testimonials[2]} />
              </Suspense>
            </ErrorBoundary>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Video testimonial - tall */}
            <ErrorBoundary>
              <Suspense fallback={<div className="animate-pulse h-96 bg-white/5 rounded-2xl"></div>}>
                <TestimonialCard testimonial={testimonials[3]} />
              </Suspense>
            </ErrorBoundary>
            
            {/* Text testimonial - short */}
            <ErrorBoundary>
              <Suspense fallback={<div className="animate-pulse h-64 bg-white/5 rounded-2xl"></div>}>
                <TestimonialCard testimonial={testimonials[1]} />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </div>

      {/* Integration Tools Section */}
      <div className="max-w-6xl mx-auto relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">Seamless Integration</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {integrationTools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
                <Image 
                  src={tool.logo} 
                  alt={tool.name} 
                  width={64} 
                  height={64} 
                  className="object-contain"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">{tool.name}</h4>
              <p className="text-sm text-gray-300 max-w-[200px]">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}