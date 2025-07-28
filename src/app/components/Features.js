'use client';
import Image from 'next/image';

export default function Features() {
  const targetGroups = [
    "YouTubers & Influencers who need daily or weekly uploads",
    "E-commerce & SaaS brands burning cash on freelancers",
    "Marketing agencies drowning in client deliverables"
  ];

  const features = [
    {
      icon: "/1-Day First Drafts.png",
      title: "1-Day First Drafts", 
      description: "First cut in as little as 24 h Friday fastest"
    },
    {
      icon: "/Unlimited Revisions.png",
      title: "Unlimited Revisions",
      description: "We polish until you love it - no revision caps, ever"
    },
    {
      icon: "/Asia - Based Cost Advanrage.png",
      title: "Asia - Based Cost Advantage",
      description: "Sri Lanka production hub is top-tier talent at 40-50% lower cost and the savings goes straight to you."
    },
    {
      icon: "/Dedicated Editor.png",
      title: "Dedicated Editor",
      description: "Your own editor learns your style, brand, and tone."
    }
  ];
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-white mb-16">
          Why Videomate Beats Everyone on<br />
          Price + Performance
        </h2>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="backdrop-blur-xl rounded-4xl p-6 border border-[#D7B9FE]/50  h-88 w-full mx-auto shadow-xl hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.175), rgba(255, 255, 255, 0.1))',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="flex flex-col items-center text-center h-full justify-between py-4">
                <div className="mb-4">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-md md:text-2xl font-semibold mb-3"
                    style={{
                      background: 'linear-gradient(to right, #BC8AFF, #D7B9FE)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                  {feature.title}
                </h3>
                <p className="text-white text-xs md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-medium text-white mb-2">
            No Pay Add-Ups. The price you pick is the price you pay—forever.
          </p>
          <p className="text-xl md:text-2xl font-medium text-purple-300">
            No overage charges, no &ldquo;extra-minute&rdquo; surprises, no hidden licensing fees.
          </p>
        </div>
      </div>

      {/* Decorative Shadow */}
      <div className="relative flex justify-center my-16">
        <div 
          className="w-64 h-32 rounded-full blur-3xl absolute -z-10"
          style={{
            background: '#B47DFF',
            opacity: 0.3
          }}
        ></div>
      </div>

      {/* Target Audience Section */}
      <div className="max-w-4xl mx-auto mt-16 px-4 relative">
        {/* Shadow behind the title */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div 
            className="w-300 h-175 rounded-full blur-[200px]"
            style={{
              background: '#B47DFF',
              opacity: 0.2
            }}
          ></div>
        </div>
        
        <div 
          className="backdrop-blur-xl rounded-[64px] p-20 md:p-24 border border-[#D7B9FE]/50 shadow-xl mx-4 relative z-10 "

        >
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-white text-center mb-8">
            Built for People Who Publish Constantly
          </h2>
          
          <div className="space-y-6">
            {targetGroups.map((group, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-white"
                  >
                    <circle cx="12" cy="12" r="10"/>
                    <path d="m10 8 4 4-4 4"/>
                  </svg>
                </div>
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                  {group}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
