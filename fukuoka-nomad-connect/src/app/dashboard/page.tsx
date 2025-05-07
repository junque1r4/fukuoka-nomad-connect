import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold mb-8 text-[#343A40]">Your Nomad Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Nomad Welcome Pass Card */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg p-6 h-full">
              <h2 className="text-xl font-semibold mb-6 text-[#343A40]">My Welcome Pass</h2>
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[200px] mb-6">
                  <Image 
                    src="/assets/welcome_pass_nft.png" 
                    alt="Nomad Welcome Pass NFT" 
                    width={200} 
                    height={200} 
                    className="rounded-lg"
                  />
                </div>
                <div className="w-full space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Status:</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Tier:</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Alpha</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Valid Until:</span>
                    <span className="text-gray-700">June 30, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Two Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* FUKU Coin Balance Card */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#343A40]">FUKU Coin Balance</h3>
              <div className="flex items-center mb-4">
                <Image 
                  src="/assets/fuku_coin_logo.png" 
                  alt="FUKU Coin" 
                  width={40} 
                  height={40}
                  className="mr-3"
                />
                <span className="text-3xl font-bold text-[#343A40]">0 FUKU</span>
              </div>
              <p className="text-gray-600 mb-6">
                Earn FUKU Coins by engaging with local businesses and participating in community events. Use them for discounts and special offers around Fukuoka.
              </p>
              <button className="border-2 border-[#00A9A5] text-[#00A9A5] px-4 py-2 rounded hover:bg-[#00A9A5] hover:text-white transition-colors">
                Learn How to Earn
              </button>
            </div>
            
            {/* Quick Links/Next Steps Card */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#343A40]">Explore & Connect</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/features/local-value" className="border border-gray-200 rounded-lg p-4 hover:border-[#00A9A5] group transition-all">
                  <h4 className="font-medium text-[#00A9A5] mb-2">Discover Local Offers</h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800">Find businesses that accept FUKU Coin and special nomad discounts</p>
                </Link>
                
                <Link href="/features/skills-hub" className="border border-gray-200 rounded-lg p-4 hover:border-[#00A9A5] group transition-all">
                  <h4 className="font-medium text-[#00A9A5] mb-2">Find Gigs & Share Skills</h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800">Exchange skills and services with local and nomad communities</p>
                </Link>
                
                <Link href="/features/community-fund" className="border border-gray-200 rounded-lg p-4 hover:border-[#00A9A5] group transition-all">
                  <h4 className="font-medium text-[#00A9A5] mb-2">Support Community Projects</h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800">Participate in DAO governance and community initiatives</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Upcoming Events Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#343A40]">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg hover:border-[#00A9A5] transition-colors">
              <h3 className="font-medium text-[#343A40]">Nomad Meetup - Fukuoka Central Park</h3>
              <p className="text-gray-600">July 15, 2025 • 18:00 - 20:00</p>
              <p className="mt-2 text-gray-700">Join fellow digital nomads for networking and knowledge sharing.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-[#00A9A5] transition-colors">
              <h3 className="font-medium text-[#343A40]">Web3 Workshop - Blockchain Basics</h3>
              <p className="text-gray-600">July 22, 2025 • 14:00 - 16:00</p>
              <p className="mt-2 text-gray-700">Learn the fundamentals of blockchain technology.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-[#00A9A5] transition-colors">
              <h3 className="font-medium text-[#343A40]">Japanese Language Exchange</h3>
              <p className="text-gray-600">July 29, 2025 • 19:00 - 21:00</p>
              <p className="mt-2 text-gray-700">Practice Japanese with locals and other nomads.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}