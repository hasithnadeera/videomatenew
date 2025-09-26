import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-32">
        <h1 className="text-5xl md:text-5xl font-bold mb-6 text-center">
          <span className="bg-gradient-to-r from-[#E2CDFF] to-[#B47DFF] bg-clip-text text-transparent">
            Client Agreement
          </span>
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="mb-6 text-lg">
            This Client Agreement (the “Agreement”) is a legally binding agreement between Videomate, a company organized under the laws of Sri Lanka (“Videomate”), and you (“Client”).
          </p>
          <p className="mb-6 text-lg">
            By engaging Videomate's services (“Services”), the Client agrees to adhere to the following terms and conditions. Failure to comply may result in the termination of the agreement, excluding any payment obligations for services already provided.
          </p>

          <h2 className="text-4xl font-bold mt-10 mb-4">Service Packages</h2>
          <h3 className="text-3xl font-semibold mt-12 mb-6">Subscription Packages</h3>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Starter Package</h3>
              <p className="mb-2"><strong className="font-semibold">Who is this for?</strong> Creators or small teams who need reliable editing support without the overhead.</p>
              <p className="mb-2"><strong className="font-semibold">Outcome:</strong> Get professional edits on time so you can focus on creating and engaging with your audience.</p>
              <p className="mb-2"><strong className="font-semibold">What You Get:</strong> High-quality edits with captions and 1080p delivery, perfect for consistent posting.</p>
              <p className="mb-2"><strong className="font-semibold">Video Count:</strong> We'll keep 1 video live at a time, refreshed as soon as it's approved.</p>
              <p className="text-xl font-bold text-green-400"> Price: Start Growing for $799/month</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Pro Package</h3>
              <p className="mb-2"><strong className="font-semibold">Who is this for?</strong> Growing brands handling multiple clients who need faster turnaround and more active projects.</p>
              <p className="mb-2"><strong className="font-semibold">Outcome:</strong> Scale your content production with speed and collaboration while keeping quality intact.</p>
              <p className="mb-2"><strong className="font-semibold">What You Get:</strong> Access to a team dashboard, real-time updates, and a Slack channel for smooth communication.</p>
              <p className="mb-2"><strong className="font-semibold">Video Count:</strong> We'll keep 2 videos live at any given time, updated within 24h.</p>
              <p className="text-xl font-bold text-green-400">Price: Start Growing for $1399/month </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Agency Package</h3>
              <p className="mb-2"><strong className="font-semibold">Who is this for?</strong> Agencies that want to scale their client delivery without building a full in-house editing team.</p>
              <p className="mb-2"><strong className="font-semibold">Outcome:</strong> Deliver consistent, top-tier content to your clients while focusing on growth and strategy.</p>
              <p className="mb-2"><strong className="font-semibold">What You Get:</strong> A complete white-label video editing solution - we handle the editing, branding, and polish while you maintain the client relationship.</p>
              <p className="mb-2"><strong className="font-semibold">Video Count:</strong> We'll keep 4 videos live and running at any given time, constantly refreshed to stay relevant and engaging.</p>
              <p className="text-xl font-bold text-green-400">Price: Start Growing for $2499/month </p>
            </div>
          </div>
          <h3 className="text-3xl font-semibold mt-10 mb-4">Pay-Per Video Packages</h3>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">1 Short-Form Video</h3>
              <p className="mb-2"><strong className="font-semibold">Who is this for?</strong> Creators who want to test our service with a single video before committing.</p>
              <p className="mb-2"><strong className="font-semibold">Outcome:</strong> Get a polished, ready-to-post video with captions and fast turnaround.</p>
              <p className="mb-2"><strong className="font-semibold">What You Get:</strong> 1 short-form video edit. 2 free revisions. Delivered within 24-48h.</p>
              <p className="text-xl font-bold text-green-400"> Price: Start Growing for $799/month</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">8 Videos per Month</h3>
              <p className="mb-2"><strong className="font-semibold">Who is this for?</strong> Brands or small agencies that need consistent video content without a full subscription.</p>
              <p className="mb-2"><strong className="font-semibold">Outcome:</strong> Stay active online with a steady stream of quality videos each month.</p>
              <p className="mb-2"><strong className="font-semibold">What You Get:</strong> 8 edited videos.2 free revisions per video Delivered in ≤ 24h</p>
              <p className="mb-2"><strong className="font-semibold">Video Count:</strong> We'll keep 2 videos live at any given time, updated within 24h.</p>
              <p className="text-xl font-bold text-green-400">Price: Start Growing for $1399/month </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Agency Package</h3>
              <p className="mb-2"><strong className="font-semibold">Who is this for?</strong> Agencies that want to scale their client delivery without building a full in-house editing team.</p>
              <p className="mb-2"><strong className="font-semibold">Outcome:</strong> Deliver consistent, top-tier content to your clients while focusing on growth and strategy.</p>
              <p className="mb-2"><strong className="font-semibold">What You Get:</strong> A complete white-label video editing solution - we handle the editing, branding, and polish while you maintain the client relationship.</p>
              <p className="mb-2"><strong className="font-semibold">Video Count:</strong> We'll keep 4 videos live and running at any given time, constantly refreshed to stay relevant and engaging.</p>
              <p className="text-xl font-bold text-green-400">Price: Start Growing for $2499/month </p>
            </div>
          </div>
          <p className="mt-6 text-md text-gray-400">
            Videomate retains the right to revise, enhance, or modify these service packages at its sole discretion. Clients are advised to frequently review their service package terms for updates.
          </p>

          <h2 className="text-3xl font-semibold mt-10 mb-6">Ownership of Materials</h2>
          <p className="mb-6 text-lg">
            All final design and original source files created by Videomate belong to the Client. The Client shall be the sole owner of the copyright for all projects upon full payment for the services rendered.
          </p>

          <h2 className="text-3xl font-semibold mt-10 mb-6">Fonts and Third-Party Materials</h2>
          <p className="mb-6 text-lg">
            In the event that any project incorporates fonts or other third-party materials not owned by Videomate, and which require a commercial license for the Client to legally reproduce, distribute, or publicly display, Videomate will inform the Client in writing. The Client will need to purchase the appropriate licenses for these third-party materials. The Client assumes all responsibility for any consequences resulting from the failure to purchase these licenses.
          </p>

          <h2 className="text-3xl font-semibold mt-10 mb-6">Client Responsibilities</h2>
          <ul className="list-disc list-inside mb-6 text-lg space-y-2">
            <li>The Client has the legal capacity to enter into this Agreement and agrees to comply with these Terms and Conditions;</li>
            <li>The Client will provide clear and prompt communication to ensure the timely delivery of services;</li>
            <li>The Client will not use the services provided by Videomate for any illegal or unauthorized purpose;</li>
            <li>The Client’s use of the services will not violate any applicable law or regulation.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-10 mb-6">Payment Terms</h2>
          <p className="mb-6 text-lg">
            All payments made to Videomate for services are non-refundable unless otherwise expressly provided in this Agreement. Payments are required in advance for services to be rendered within the forthcoming month.
          </p>
          <p className="mb-6 text-lg">
            In the event that a refund is granted by Videomate, all rights, title, and interest in and to all work products, tangible and intangible, resulting from or related to any work performed by Videomate, including all intellectual property rights, shall be retained by Videomate. Clients are expressly prohibited from using any such work product in any manner or medium without the express written consent of Videomate.
          </p>

          <h2 className="text-3xl font-semibold mt-10 mb-6">Revisions and Modifications</h2>
          <p className="mb-6 text-lg">
            Videomate reserves the right to make changes, revisions, or modifications to the services provided under this Agreement. Any major changes requested by the Client after the initial agreement may incur additional charges.
          </p>

          <h2 className="text-3xl font-semibold mt-10 mb-6">Confidentiality and Showcasing Work</h2>
          <p className="mb-6 text-lg">
            Videomate agrees to keep the Client's information confidential. However, Videomate reserves the right to showcase completed projects on digital channels, including social media and websites, unless otherwise agreed upon in writing. The Client may request a Non-Disclosure Agreement (NDA) to protect sensitive information.
          </p>

          <h2 className="text-3xl font-semibold mt-10 mb-6">Termination of Services</h2>
          <p className="mb-6 text-lg">
            This Agreement shall remain in effect until terminated by the Client or Videomate. Videomate may terminate this Agreement at any time without notice if the Client breaches any terms of this Agreement or fails to make payments as agreed.
          </p>

          <h2 className="text-3xl font-semibold mt-10 mb-6">Limitation of Liability</h2>
          <p className="mb-6 text-lg">
            Videomate, its directors, employees, members, contractors, or agents shall not be liable to the Client for any direct, indirect, consequential, incidental, special, or punitive damages, including lost profit, lost revenue, lost data, or other damages or losses arising from the services provided by Videomate.
          </p>

          <h2 className="text-3xl font-semibold mt-10 mb-6">Governing Law</h2>
          <p className="mb-6 text-lg">
            This Agreement shall be governed by and construed in accordance with the laws of Sri Lanka without regard to conflict of law principles.
          </p>

          <h2 className="text-3xl font-semibold mt-10 mb-6">Contact Information</h2>
          <p className="mb-6 text-lg">
            Videomate welcomes any questions or comments regarding these Terms and Conditions. Please direct any queries to the following address:
          </p>
          <address className="not-italic text-lg">
            Videomate<br />
            2nd Floor,<br />
            No 150<br />
            Panadura road<br />
            Horana<br />
            12400<br />
            Sri Lanka
          </address>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;