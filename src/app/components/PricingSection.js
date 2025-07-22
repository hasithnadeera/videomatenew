'use client';

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$799",
      period: "/mo",
      features: [
        <>Active videos <span style={{color: '#BA88FF'}}>1</span></>,
        <>Turnaround <span style={{color: '#BA88FF'}}>24-48h</span></>
      ],
      extraFeatures: [
        "1080 p",
        "Captions"
      ],
      isPopular: false
    },
    {
      name: "Pro",
      price: "$1,399",
      period: "/mo",
      features: [
        <>Active videos <span style={{color: '#BA88FF'}}>5</span></>,
        <>Turnaround <span style={{color: '#BA88FF'}}>24h</span></>
      ],
      extraFeatures: [
        "Team Dashboard",
        "Slack Channel"
      ],
      isPopular: true
    },
    {
      name: "Agency",
      price: "$2,499",
      period: "/mo",
      features: [
        <>Active videos <span style={{color: '#BA88FF'}}>4</span></>,
        <>Turnaround <span style={{color: '#BA88FF'}}>24h</span></>
      ],
      extraFeatures: [
        "White label",
        "Motion GFX",
        "Team Dashboard"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Plans <span className="text-3xl">&</span> Pricing
          </h2>
          <p className="text-xl text-gray-300">
            Flat, Transparent, Forever
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative backdrop-blur-xl rounded-3xl p-8 border ${plan.isPopular ? 'border-purple-400/20 scale-105 z-10' : 'border-white/20'} shadow-xl`}
              style={{
                background: plan.isPopular
                  ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.05))'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
              }}
            >
              {/* Plan Name */}
              <div className="mb-6">
                <h3 className="text-lg font-bold" style={{
                  background: 'linear-gradient(to bottom, #E2CDFF, #B47DFF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-xl text-gray-400 font-bold ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
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
                        className="text-white w-5 h-5"
                      >
                        <circle cx="12" cy="12" r="10"/>
                        <path d="m10 8 4 4-4 4"/>
                      </svg>
                    </div>
                    <div className="text-gray-300">{feature}</div>
                  </div>
                ))}
              </div>

              {/* Extra Features */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Extra</h4>
                <div className="space-y-3">
                  {plan.extraFeatures.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
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
                          className="text-white w-5 h-5"
                        >
                          <circle cx="12" cy="12" r="10"/>
                          <path d="m10 8 4 4-4 4"/>
                        </svg>
                      </div>
                      <div className="text-gray-300">{feature}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}