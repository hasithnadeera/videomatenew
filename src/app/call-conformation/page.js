"use client";

import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';

export default function CallConformationPage() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Navbar />

      <main className="container mx-auto px-4 pt-32 md:pt-24">
        {/* Header */}
        <header className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          <h1 className="text-3xl md:text-6xl font-bold mb-2 sm:mb-4 mt-2 sm:mt-4 md:mt-8 lg:mt-16 xl:mt-24">
            Congrats On Booking Your Call! <br />
            <span className="text-gradient text-xl md:text-5xl bg-gradient-to-r from-[#B57FFE] to-[#ECECEC] text-transparent bg-clip-text">
              Here&apos;s What Happens Next
            </span>
            <span className="text-white text-xl md:text-5xl"> .....</span>
          </h1>
        </header>

        {/* Steps */}
        <section className="max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="text-green-500 text-xl mt-1">✓</div>
              <p className="text-gray-300">
                <span
                  className="font-semibold"
                  style={{
                    background: 'linear-gradient(to right, #BC8AFF, #D7B9FE)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Step 1:
                </span>
                <span className="ml-2">
                  You will receive an email with a meeting invite for your scheduled time. Make sure to accept the invite so it shows up in your calendar.
                </span>
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="text-green-500 text-xl mt-1">✓</div>
              <p className="text-gray-300">
                <span
                  className="font-semibold"
                  style={{
                    background: 'linear-gradient(to right, #BC8AFF, #D7B9FE)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Step 2:
                </span>
                <span className="ml-2">
                  You will also receive a Zoom link in the meeting invite as well, as that is where the meeting will be held.
                </span>
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="text-green-500 text-xl mt-1">✓</div>
              <p className="text-gray-300">
                <span
                  className="font-semibold"
                  style={{
                    background: 'linear-gradient(to right, #BC8AFF, #D7B9FE)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Step 3:
                </span>
                <span className="ml-2">
                  Please be at your computer for the meeting as we may be sharing our screen with you on the call and reviewing your business.
                </span>
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-4">
              <div className="text-green-500 text-xl mt-1">✓</div>
              <p className="text-gray-300">
                <span
                  className="font-semibold"
                  style={{
                    background: 'linear-gradient(to right, #BC8AFF, #D7B9FE)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Step 4:
                </span>
                <span className="ml-2">
                  Please watch this video below which covers how to prepare for our call and what we will cover on our call together.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Image: smaller on mobile */}
        <section className="mt-4 sm:mt-6">
          <div className="mx-auto w-full px-0 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[340px] sm:max-w-[560px] md:max-w-[720px] lg:max-w-[900px]">
              <Image
                src="/call-conformation-comments.webp"
                alt="Call Confirmation Comments"
                width={1600}
                height={1200}
                sizes="(max-width: 640px) 340px, (max-width: 768px) 560px, (max-width: 1024px) 720px, 900px"
                className="block w-full h-auto object-contain rounded-xl sm:rounded-2xl !m-0"
                priority
              />
            </div>
          </div>
        </section>

        <footer className="mt-10 md:mt-14">
          <Footer />
        </footer>
      </main>
    </div>
  );
}
