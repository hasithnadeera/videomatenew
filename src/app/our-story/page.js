import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function OurStoryPage() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-32">

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#E2CDFF] to-[#B47DFF] bg-clip-text text-transparent">
              Our Story
            </span>
          </h1>
          <p className="text-lg text-white">
            Videomate was founded with a simple mission: to help businesses create amazing videos that tell their stories.
          </p>
        </div>

        <section className="mt-12">
          <div className="max-w-2xl mx-auto">
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple ring-4 ring-[#E2CDFF] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                    <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="flex-grow w-px bg-white"></div>  
              </div>
              <div className="pb-8">
                <h3 className="mb-1 text-lg font-semibold text-white">The Idea</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-purple-300">2020</time>
                <p className="text-base font-normal text-white">Our founder, a passionate video editor and marketer, saw a gap in the market for a reliable and affordable video editing service.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple ring-4 ring-[#E2CDFF] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                    <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="flex-grow w-px bg-gray-300"></div>
              </div>
              <div className="pb-8">
                <h3 className="mb-1 text-lg font-semibold text-white">Launch</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-purple-300">2021</time>
                <p className="text-base font-normal text-white">Videomate was officially launched, offering a subscription-based video editing service to businesses of all sizes.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple ring-4 ring-[#E2CDFF] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                    <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-white">Growth</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-purple-300">Present</time>
                <p className="text-base font-normal text-white">Today, we have a team of talented editors and have helped hundreds of businesses create high-quality videos.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-4">
              <Image src="/mahesh.webp" alt="Team Member 1" width={150} height={150} className="rounded-3xl mx-auto mb-4 shadow-[0_0_100px_rgba(180,125,255,0.4)]" />
              <h3 className="text-xl font-semibold">Mahesh Aluthge</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            <div className="p-4">
              <Image src="/Hasith.webp" alt="Team Member 2" width={150} height={150} className="rounded-3xl mx-auto mb-4 shadow-[0_0_100px_rgba(180,125,255,0.4)]" />
              <h3 className="text-xl font-semibold">Hasith Nadeera</h3>
              <p className="text-gray-500">Operational Manager</p>
            </div>
            <div className="p-4">
              <Image src="/achala.webp" alt="Team Member 3" width={150} height={150} className="rounded-3xl mx-auto mb-4 shadow-[0_0_100px_rgba(180,125,255,0.4)]" />
              <h3 className="text-xl font-semibold">Achala Nuwandika</h3>
              <p className="text-gray-500">Finance & HR Manager</p>
            </div>
            <div className="p-4">
              <Image src="/Lasika.webp" alt="Team Member 4" width={150} height={150} className="rounded-3xl mx-auto mb-4 shadow-[0_0_100px_rgba(180,125,255,0.4)]" />
              <h3 className="text-xl font-semibold">Lasika Nimesh</h3>
              <p className="text-gray-500">Marketing Manager</p>
            </div>
          </div>
        </section>

        <section className="mt-12 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg text-white mb-8">
            We are always looking for passionate people to join our team. If you are a talented video editor, marketer, or developer, we would love to hear from you.
          </p>
          <div className="flex justify-center">
            <a href="/call-booking" className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#B47DFF] to-[#8F5CFF] text-white font-semibold text-lg shadow-md transition hover:brightness-110">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}