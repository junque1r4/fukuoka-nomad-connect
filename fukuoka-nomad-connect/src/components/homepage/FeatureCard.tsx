import Link from 'next/link';
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode; // Placeholder for an icon component or SVG
  title: string;
  description: string;
  learnMoreLink: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, learnMoreLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center font-inter h-full">
      <div className="mb-4 text-[#FFC107]"> {/* Amber color for icon, can be customized */}
        {/* Icon placeholder: Replace with actual icon component or img tag */}
        {icon || <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">Icon</div>}
      </div>
      <h3 className="text-xl font-semibold text-[#343A40] mb-2 font-inter">
        {title}
      </h3>
      <p className="text-[#6C757D] text-base mb-4 font-inter flex-grow">
        {description}
      </p>
      <Link href={learnMoreLink} legacyBehavior>
        <a className="text-[#00A9A5] hover:text-[#008781] font-medium font-inter transition duration-300">
          Learn More &rarr;
        </a>
      </Link>
    </div>
  );
};

export default FeatureCard;