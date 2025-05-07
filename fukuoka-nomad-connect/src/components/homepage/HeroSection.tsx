import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-[75vh] bg-cover bg-center text-white"
      // TODO: Replace with a high-quality Fukuoka background image
      style={{ backgroundImage: "url('/assets/fukuoka_tower.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Dark gradient overlay */}
      <div className="relative z-10 text-center p-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-inter">
          Unlock Fukuoka: Connect, Contribute, Thrive.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 font-inter">
          Your gateway to local life, seamless payments, and community impact on
          the Solana blockchain.
        </p>
        <Link href="/get-pass" legacyBehavior>
          <a className="bg-[#00A9A5] hover:bg-[#008781] text-white font-semibold py-3 px-8 rounded-lg text-lg font-inter transition duration-300 ease-in-out shadow-md">
            Get Your Nomad Pass
          </a>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
