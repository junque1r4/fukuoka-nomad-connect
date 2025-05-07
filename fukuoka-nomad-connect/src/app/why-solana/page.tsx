import Image from 'next/image';
import Link from 'next/link';

export default function WhySolana() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Powered by Solana</h1>
        <p className="text-gray-600 mb-10 text-lg">
          Fukuoka Nomad Connect leverages the power of the Solana blockchain to create a seamless, 
          efficient, and affordable digital experience for nomads and local businesses in Fukuoka.
        </p>
        
        <div className="mb-12 relative">
          <Image
            src="/assets/expanding_circle.png"
            alt="Solana Ecosystem"
            width={900}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Key Benefits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Lightning Speed Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#9945FF]/10 text-[#9945FF] mb-4">
              <Image
                src="/assets/lightining_speed_icon.png"
                alt="Lightning Speed Icon"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Lightning Speed</h3>
            <p className="text-gray-600">
              Solana processes thousands of transactions per second with sub-second finality, 
              ensuring seamless user experience for all your interactions.
            </p>
          </div>
          
          {/* Low Cost Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#14F195]/10 text-[#14F195] mb-4">
              <Image
                src="/assets/solana_affordable.png"
                alt="Low Cost Icon"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Minimal Cost</h3>
            <p className="text-gray-600">
              Transaction fees are a fraction of a cent, making our platform accessible to everyone 
              from small local businesses to individual nomads.
            </p>
          </div>
          
          {/* Ecosystem Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#FFC107]/10 text-[#FFC107] mb-4">
              <Image
                src="/assets/vibrant_ecosystem_icon.png"
                alt="Ecosystem Icon"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Vibrant Ecosystem</h3>
            <p className="text-gray-600">
              Access to a thriving ecosystem of tools and services, including popular wallets, 
              Solana Pay integration, and rich NFT infrastructure.
            </p>
          </div>
        </div>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">How We Use Solana</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Welcome Pass NFTs</h3>
              <p className="text-gray-600 mb-4">
                Your Nomad Welcome Pass is minted instantly as an NFT on Solana, giving you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Secure, verifiable digital identity in Fukuoka</li>
                <li>Access to exclusive community features</li>
                <li>Transparent record of your participation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Local Transactions</h3>
              <p className="text-gray-600 mb-4">
                Solana Pay enables smooth transactions between nomads and local businesses:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>QR code-based payments at partner locations</li>
                <li>Real-time settlement with minimal fees</li>
                <li>Automatic FUKU token rewards with each transaction</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Community Fund DAO</h3>
              <p className="text-gray-600 mb-4">
                Our decentralized governance system runs efficiently on Solana:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Low-cost voting for all community members</li>
                <li>Transparent fund allocation and tracking</li>
                <li>Fast implementation of community decisions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Skills Exchange</h3>
              <p className="text-gray-600 mb-4">
                Our skills hub benefits from Solana's infrastructure:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Verified credentials stored as on-chain attestations</li>
                <li>Secure messaging and agreement systems</li>
                <li>Reputation building through verifiable actions</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="bg-[#F8F9FA] p-6 rounded-lg mb-10">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Solana Pay Integration</h2>
              <p className="text-gray-600 mb-4">
                With Solana Pay, we've created a seamless payment experience that connects 
                digital nomads with local businesses in Fukuoka.
              </p>
              <p className="text-gray-600">
                The system offers instant transactions, automatic rewards, and a transparent 
                record of your positive impact on the local economy.
              </p>
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
        </section>
        
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-2">
            Want to learn more about the technology powering Fukuoka Nomad Connect?
          </p>
          <Link 
            href="https://solana.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#00A9A5] hover:text-[#008b88] font-medium"
          >
            Learn more at solana.com
          </Link>
        </div>
        
        <section className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Ready to Join?</h2>
          <p className="text-center mb-6">
            Experience the benefits of our Solana-powered platform by getting your Nomad Welcome Pass today.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/get-pass" 
              className="bg-[#00A9A5] hover:bg-[#008b88] text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              Get Your Pass
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}