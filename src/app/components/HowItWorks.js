export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Uploads",
      description: "Drop footage into your secure folder"
    },
    {
      number: "2",
      title: "Brief",
      description: "Fill a 1-minute Notion form: platform, vibe, must-have moments."
    },
    {
      number: "3",
      title: "Edit",
      description: "Your dedicated editor delivers a draft in 24-48 h."
    },
    {
      number: "4",
      title: "Review",
      description: "Click-to-comment in Frame.io; instant Slack chat."
    },
    {
      number: "5",
      title: "Publish",
      description: "Download, post, repeat. Unlimited requests, zero extra cost."
    }
  ];

  return (
    <section className="py-20 px-6 relative bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">
          How it works
        </h2>

        {/* Steps Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-400 opacity-80"></div>

          {/* Steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex items-center">
                {/* Horizontal connecting line */}
                <div className={`absolute top-1/2 transform -translate-y-0.5 h-0.5 bg-purple-400 opacity-60 z-0 ${index % 2 === 0 ? 'right-1/2 w-32' : 'left-1/2 w-32'}`}></div>
                
                <div className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Horizontal Line Start Connector */}
                  <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${index % 2 === 0 ? '-translate-x-3' : 'translate-x-3'}`}>
                    <div className="w-6 h-6 rounded-full border-2 border-purple-400 bg-transparent" 
                         style={{
                           boxShadow: '0 0 15px rgba(180, 125, 255, 0.5)'
                         }}></div>
                  </div>
                  
                  {/* Step Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
                    {/* Step Number */}
                    <div className={`text-6xl md:text-7xl font-bold mb-4 leading-none ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                         style={{
                           background: 'linear-gradient(135deg, #E2CDFF, #B47DFF)',
                           WebkitBackgroundClip: 'text',
                           WebkitTextFillColor: 'transparent',
                           backgroundClip: 'text'
                         }}>
                      {step.number}
                    </div>
                    
                    {/* Step Title */}
                    <div className={`inline-block px-6 py-2 rounded-full border border-white/30 mb-4 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                         style={{
                           background: 'rgba(255, 255, 255, 0.1)',
                           backdropFilter: 'blur(15px)'
                         }}>
                      <span className="text-white font-medium text-lg">{step.title}</span>
                    </div>
                    
                    {/* Step Description */}
                    <p className={`text-white/80 text-base leading-relaxed max-w-xs ${index % 2 === 0 ? 'mr-auto text-left' : 'ml-auto text-right'}`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Center Circle (Connection Point) */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-white border-2 border-purple-400 shadow-lg"></div>
                  </div>
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}