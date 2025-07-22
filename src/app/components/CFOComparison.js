import React from "react";
import ComparisonCard from './ComparisonCard';
import { COMPARISON_DATA } from '../constants';

export default function CFOComparison() {
  // Enhanced comparison data with JSX for the highlighted item
  const comparisonData = COMPARISON_DATA.map(item => {
    if (item.isHighlighted) {
      return {
        ...item,
        description: (
          <>
            $16,788
            <span className="text-base text-white">
              / year—all-inclusive unlimited videos, zero headaches
            </span>
          </>
        )
      };
    }
    return item;
  });
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Why so affordable?</h2>
      <p className="max-w-3xl text-center text-base md:text-lg mb-8 text-gray-200">
        Our editors operate from Asia’s creative hotbed—so you pay global-agency quality at Asia-based rates. No payroll. No office leases. Just pure editing horsepower.
      </p>
      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">The Math That Makes CFOs Smile</h3>
      <div className="w-full max-w-2xl flex flex-col gap-4">
        {comparisonData.map((item, index) => (
          <ComparisonCard
            key={index}
            title={item.title}
            description={item.description}
            isHighlighted={item.isHighlighted}
          />
        ))}
      </div>
      <p className="mt-8 text-md text-gray-300 max-w-2xl text-center">
        <span className="font-semibold text-white">*You keep the savings</span>—and still get award-winning edits delivered on autopilot.
      </p>
    </section>
  );
}