'use client';
export const metadata = {
  robots: { index: false, follow: false },
};

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CaseStudies from '@/app/components/caseStudies';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CallBookingPage() {
  const router = useRouter();

  useEffect(() => {
    // Load Calendly widget script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Listen for Calendly events
    const handleCalendlyEvent = (e) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        // Redirect to confirmation page when event is scheduled
        router.push('/call-conformation-page');
      }
    };
    
    // Add event listener for Calendly events
    window.addEventListener('message', handleCalendlyEvent);
    
    return () => {
      // Clean up script and event listener when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, [router]);

  return (
    <div>
      <Navbar/>
      <div 
        className="mt-32 mb-[0px] md:mb-[-80px] md:mt-20 calendly-inline-widget"
        data-url="https://calendly.com/videomatecreators/book-a-call-earn-views"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
      <CaseStudies/>
      <Footer />
    </div>
  );
}