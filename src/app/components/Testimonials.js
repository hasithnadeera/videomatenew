'use client';
import React, { lazy, Suspense } from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import ErrorBoundary from './ErrorBoundary';

// Lazy load the TestimonialCard component
const TestimonialCard = lazy(() => import('./TestimonialCard'));

export default function Testimonials() {
  // Using testimonials data from constants
  const testimonials = TESTIMONIALS_DATA;

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Success Stories</h2>
      <div className="max-w-4xl mx-auto">
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
    </section>
  );
}