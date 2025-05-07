import Link from "next/link";

const CallToActionSection = () => {
  return (
    <section className="bg-[#00A9A5] text-white py-16 lg:py-24">
      {" "}
      {/* Primary Teal Blue background */}
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-inter">
          Ready to Explore Fukuoka?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/get-pass" legacyBehavior>
            <a className="bg-white hover:bg-gray-100 text-[#00A9A5] font-semibold py-3 px-8 rounded-lg text-lg font-inter transition duration-300 ease-in-out shadow-md">
              Get Your Nomad Pass
            </a>
          </Link>
          <Link href="/why-solana" legacyBehavior>
            <a className="border-2 border-white hover:bg-white hover:text-[#00A9A5] text-white font-semibold py-3 px-8 rounded-lg text-lg font-inter transition duration-300 ease-in-out">
              Learn More About Solana
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
