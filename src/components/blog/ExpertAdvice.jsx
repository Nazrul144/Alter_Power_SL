import React from "react";

const ExpertAdvice = () => {
  return (
    <div className="dark:bg-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300">Expert Advice</h2>
          <p className="text-lg dark:text-neutral-400 mt-4">Expert insights for maintaining and enhancing your property and systems.</p>
        </div>
        <div className=" rounded-lg border shadow-lg p-6">
          <blockquote className="italic text-xl text-gray-800 dark:text-gray-300">
            "Proper and regular service helps businesses operate smoothly, reduces costs, and enhances the longevity of your property and assets."
            <footer className="mt-4 ">— APS, Your Trusted Property Solutions Provider</footer>
          </blockquote>
          <p className="dark:text-neutral-400 mt-6">Here are some essential maintenance tips to keep your property and systems in top shape:</p>
          <ul className="list-disc list-inside dark:text-neutral-400 mt-4">
            <li>Ensure regular electrical system checks to prevent failures and improve efficiency.</li>
            <li>Check and clean solar panels to maintain peak energy performance.</li>
            <li>Schedule roof inspections and waterproofing to avoid costly repairs down the line.</li>
            <li>Maintain plumbing systems to prevent leaks, water damage, and high utility bills.</li>
            <li>Invest in regular carpentry upkeep for enhanced functionality and aesthetics of your property.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ExpertAdvice;
