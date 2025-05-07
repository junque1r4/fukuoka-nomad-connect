import Image from 'next/image';

export default function WhySolana() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Why We Chose Solana</h1>
        <p className="text-gray-600 mb-10">The technology behind Fukuoka Nomad Connect</p>
        
        <div className="mb-12 relative">
          <Image
            src="/assets/expanding_circle.png"
            alt="Solana Ecosystem"
            width={900}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Speed and Scalability</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-2/3">
              <p className="mb-4">
                For our Fukuoka Nomad Connect platform, speed matters. Solana processes thousands of transactions 
                per second with sub-second finality, ensuring seamless user experience when:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Minting your Nomad Welcome Pass instantly</li>
                <li>Managing local value transactions in real-time</li>
                <li>Participating in the community fund governance</li>
                <li>Exchanging skills and services with no delays</li>
              </ul>
              <p>
                Unlike other blockchains that struggle with scalability, Solana&apos;s architecture was built from 
                the ground up to handle massive adoption while keeping costs minimal.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src="/assets/lightining_speed_icon.png"
                alt="Lightning Fast Speed"
                width={200}
                height={200}
                className="object-contain h-48"
              />
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Affordability for Everyone</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3 flex justify-center order-1 md:order-none">
              <Image
                src="/assets/solana_affordable.png"
                alt="Affordable Transactions"
                width={200}
                height={200}
                className="object-contain h-48"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="mb-4">
                Transaction fees on Solana are a fraction of a cent, making our platform accessible to everyone:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Small local businesses can accept digital payments with negligible fees</li>
                <li>Frequent community interactions don&apos;t become expensive</li>
                <li>Microtransactions become viable for everyday use</li>
                <li>No prohibitive gas fees that fluctuate unpredictably</li>
              </ul>
              <p>
                We believe that blockchain technology should be accessible to all nomads and locals, 
                regardless of their financial resources. Solana&apos;s low-cost model aligns perfectly with our mission.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Vibrant Ecosystem & Developer Resources</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-2/3">
              <p className="mb-4">
                Building on Solana gives us access to a thriving ecosystem of tools, services, and partners:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Integration with popular wallets like Phantom and Solflare</li>
                <li>Easy adoption of Solana Pay for frictionless payments</li>
                <li>Rich NFT infrastructure for our Welcome Pass and future collectibles</li>
                <li>Robust development frameworks that accelerate our roadmap</li>
              </ul>
              <p>
                As we grow Fukuoka Nomad Connect, the Solana ecosystem provides everything we need to scale 
                our community features while maintaining excellent user experience.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src="/assets/vibrant_ecosystem_icon.png"
                alt="Vibrant Ecosystem"
                width={200}
                height={200}
                className="object-contain h-48"
              />
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Solana Pay Integration</h2>
          <div className="bg-[#F8F9FA] p-6 rounded-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2">
                <h3 className="font-semibold mb-2 text-gray-800">Seamless Local Transactions</h3>
                <p className="mb-4">
                  With Solana Pay, we&apos;re enabling smooth transactions between nomads and local businesses:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>QR code-based payments accepted at partner locations</li>
                  <li>Real-time settlement with no middleman fees</li>
                  <li>Automatic FUKU token rewards with each transaction</li>
                  <li>Transparent record of your local economic impact</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src="/assets/solana_pay_fuku.png"
                  alt="Solana Pay Integration"
                  width={300}
                  height={300}
                  className="object-contain h-64"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Ready to Join?</h2>
          <p className="text-center mb-6">
            Experience the benefits of our Solana-powered platform by getting your Nomad Welcome Pass today.
          </p>
          <div className="flex justify-center">
            <a 
              href="/get-pass" 
              className="bg-[#00A9A5] hover:bg-[#008b88] text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              Get Your Pass
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}