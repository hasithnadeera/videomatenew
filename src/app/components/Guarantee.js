'use client';

import Image from 'next/image';

export default function Icons() {
  const integrationTools = [
    {
      name: "Slack",
      logo: "/slack.png",
      description: "DM your editor like they're in the next cubicle."
    },
    {
      name: "Notion",
      logo: "/notion.png",
      description: "Transparent queue, real-time status."
    },
    {
      name: "Frame.io",
      logo: "/frameio.png",
      description: "Timestamp comments: no messy email chains."
    },
    {
      name: "Adobe CC",
      logo: "/adobe.png",
      description: "Hollywood-grade polish on every frame."
    }
  ];

  return (
    <section className="py-16 px-4 w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {integrationTools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
              <Image 
                src={tool.logo} 
                alt={tool.name} 
                width={64} 
                height={64} 
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
            <p className="text-sm text-gray-300 max-w-[200px]">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
