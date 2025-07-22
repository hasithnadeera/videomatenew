'use client';
import React, { lazy, Suspense } from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import ErrorBoundary from './ErrorBoundary';

// Lazy load the TestimonialCard component
const TestimonialCard = lazy(() => import('./TestimonialCard'));

export default function Testimonials() {
  // Using testimonials data from constants
  const testimonials = TESTIMONIALS_DATA;

  // Custom grid layout to match the design
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Stories</h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* First testimonial - text card */}
          <div className="md:col-span-4">
            <ErrorBoundary>
              <Suspense fallback={<div className="animate-pulse h-64"></div>}>
                <TestimonialCard testimonial={testimonials[0]} />
              </Suspense>
            </ErrorBoundary>
          </div>
          
          {/* Second testimonial - video */}
          <div className="md:col-span-8">
            <ErrorBoundary>
              <Suspense fallback={<div className="animate-pulse h-64"></div>}>
                <TestimonialCard testimonial={testimonials[2]} />
              </Suspense>
            </ErrorBoundary>
          </div>
          
          {/* Third testimonial - video */}
          <div className="md:col-span-8">
            <ErrorBoundary>
              <Suspense fallback={<div className="animate-pulse h-64"></div>}>
                <TestimonialCard testimonial={testimonials[3]} />
              </Suspense>
            </ErrorBoundary>
          </div>
          
          {/* Fourth testimonial - text card */}
          <div className="md:col-span-4">
            <ErrorBoundary>
              <Suspense fallback={<div className="animate-pulse h-64"></div>}>
                <TestimonialCard testimonial={testimonials[1]} />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  );
}

// TestimonialCard component has been moved to its own file