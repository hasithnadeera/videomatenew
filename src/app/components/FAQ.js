'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqItems = [
    {
      id: 0,
      question: "Is \"unlimited\" really unlimited?",
      answer: "Yes. Submit as many projects as you wish; we work on them sequentially (1/2/4 active slots per plan). No per-minute fees."
    },
    {
      id: 1,
      question: "Any surprise charges?",
      answer: "Never. Your flat fee covers drafts, revisions, stock assets, exports—even vertical repurposes."
    },
    {
      id: 2,
      question: "Why are you cheaper than US agencies?",
      answer: "Our editing HQ is in Sri Lanka. Lower overhead = lower prices. Talent quality stays sky-high—several of our editors cut for Fortune 500 campaigns."
    },
    {
      id: 3,
      question: "Can you do TikToks, Reels, shorts?",
      answer: "Absolutely. Just say “vertical version” in your brief."
    },
    {
      id: 4,
      question: "Contract lock-in?",
      answer: "Nope. Month-to-month. Cancel any time inside your dashboard."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-16 px-4 w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#B47DFF] to-[#D0AEFF] bg-clip-text text-transparent">
          Zero-Risk Guarantee
        </h2>
        <div className="text-2xl md:text-3xl font-semibold mb-2">
          14 days of "WOW" or 100% refund
        </div>
        <p className="text-lg text-gray-300">
          Stay because you're thrilled—not because you're locked in
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item) => (
          <div key={item.id} className="rounded-xl overflow-hidden">
            <button
              onClick={() => toggleFaq(item.id)}
              className="w-full p-5 text-left bg-white/10 backdrop-blur-md flex justify-between items-center hover:bg-white/15 transition-all duration-200"
            >
              <span className="text-lg font-medium">{item.question}</span>
              <span className="text-2xl">
                {openFaq === item.id ? '−' : '+'}
              </span>
            </button>

            {openFaq === item.id && (
              <div className="p-5 bg-white/5 backdrop-blur-sm">
                <p className="text-gray-300">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
