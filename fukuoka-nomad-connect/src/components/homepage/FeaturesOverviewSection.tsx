import FeatureCard from "./FeatureCard";

// Placeholder icons - replace with actual SVG or icon components
const PlaceholderIcon = ({ color = "#FFC107" }: { color?: string }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v6h-2zm0 8h2v2h-2z" />
  </svg>
);

const features = [
  {
    icon: <PlaceholderIcon />,
    title: "Local Value Network",
    description:
      "Engage with a local currency system, supporting Fukuoka businesses and earning rewards within the nomad community.",
    learnMoreLink: "/features/local-value",
  },
  {
    icon: <PlaceholderIcon color="#00A9A5" />,
    title: "Skills Hub",
    description:
      "Share your expertise, find collaborators, and exchange services on a platform designed for knowledge sharing.",
    learnMoreLink: "/features/skills-hub",
  },
  {
    icon: <PlaceholderIcon />,
    title: "Community Fund (DAO)",
    description:
      "Participate in a democratically-run fund to support local projects and initiatives that enrich the Fukuoka experience.",
    learnMoreLink: "/features/community-fund",
  },
];

const FeaturesOverviewSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F8F9FA]">
      {" "}
      {/* Light Gray background */}
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] text-center mb-12 lg:mb-16 font-inter">
          How Fukuoka Nomad Connect Works for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              learnMoreLink={feature.learnMoreLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverviewSection;
