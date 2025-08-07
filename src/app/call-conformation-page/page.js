"use client";

import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';

export default function CallConformationPage() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 md:pt-24">
        {/* Header Section */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 ">
          <h1 className="text-3xl md:text-6xl font-bold mb-2 sm:mb-4 mt-2 sm:mt-4 md:mt-8 lg:mt-16 xl:mt-24">
            Congrats On Booking Your Call! <br />
            <span className="text-gradient text-xl md:text-5xl bg-gradient-to-r from-[#B57FFE] to-[#ECECEC] text-transparent bg-clip-text">Here's What Happens Next</span>
            <span className="text-white text-xl md:text-5xl"> .....</span>
          </h1>
        </div>

        {/* Steps Section */}
        <div className="max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div className="text-green-500 text-xl mt-1">✓</div>
              <div>
                <span className="font-semibold" style={{
                  background: 'linear-gradient(to right, #BC8AFF, #D7B9FE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Step 1:</span>
                <span className="text-gray-300 ml-2">
                  You will receive an email with a meeting invite for your scheduled time. Make sure to accept the invite so it shows up in your calendar.
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="text-green-500 text-xl mt-1">✓</div>
              <div>
                <span className="font-semibold" style={{
                  background: 'linear-gradient(to right, #BC8AFF, #D7B9FE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Step 2:</span>
                <span className="text-gray-300 ml-2">
                  You will also receive a zoom link in the meeting invite as well, as that is where the meeting will be held.
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="text-green-500 text-xl mt-1">✓</div>
              <div>
                <span className="font-semibold" style={{
                  background: 'linear-gradient(to right, #BC8AFF, #D7B9FE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Step 3:</span>
                <span className="text-gray-300 ml-2">
                  Please be at your computer for the meeting as we may be sharing our screen with you on the call and reviewing your business.
                </span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4">
              <div className="text-green-500 text-xl mt-1">✓</div>
              <div>
                <span className="font-semibold" style={{
                  background: 'linear-gradient(to right, #BC8AFF, #D7B9FE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Step 4:</span>
                <span className="text-gray-300 ml-2">
                  Please watch this video below which covers how to prepare for our call and what we will cover on our call together.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* w-full px-4 sm:px-6 lg:px-8 mt-[-250px] mb-[-150px] */}
        {/* Comments Section */}
        <div className="w-full px-2 sm:px-4 lg:px-6 mt-[-150px] mb-[-100px]">
          <div className="w-full mx-auto text-center">
            <div className="flex justify-center items-center">
              <div className="w-full" style={{ transform: 'scale(1.2)' }}>
                <img 
                  src="/call-conformation-comments.webp"
                  alt="Call Confirmation Comments"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}