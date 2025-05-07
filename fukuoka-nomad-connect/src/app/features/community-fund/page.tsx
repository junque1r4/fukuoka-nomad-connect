import Image from 'next/image';
import Link from 'next/link';

export default function CommunityFund() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-100">Community Fund DAO</h1>
          <p className="text-gray-300">Collectively investing in the Fukuoka nomad ecosystem</p>
        </div>
        
        <div className="mb-12">
          <div className="bg-[#F8F9FA] p-6 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">What is the Community Fund?</h2>
                <p className="mb-4 text-gray-700">
                  The Community Fund is a decentralized autonomous organization (DAO) that empowers 
                  Fukuoka Nomad Connect members to collectively fund initiatives that benefit the 
                  local digital nomad ecosystem.
                </p>
                <p className="text-gray-700">
                  From hosting educational events to supporting local entrepreneurship, the fund leverages 
                  community governance to direct resources where they can create the most impact.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/assets/fund_dao.jpg" 
                  alt="Community Fund DAO"
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-100">How It Works</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex gap-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#E6F7F7] text-[#00A9A5] flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Fund Collection</h3>
                  <p className="text-gray-600">
                    The Community Fund grows through multiple sources:
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
                    <li>A percentage of FUKU token transactions</li>
                    <li>Direct donations from community members</li>
                    <li>Revenue from sponsored community events</li>
                    <li>Partnerships with local businesses and organizations</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex gap-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#E6F7F7] text-[#00A9A5] flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Proposal Submission</h3>
                  <p className="text-gray-600">
                    Any Nomad Welcome Pass holder can submit a proposal for funding. Proposals typically include:
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
                    <li>Project description and goals</li>
                    <li>Funding amount requested</li>
                    <li>Timeline and milestones</li>
                    <li>Expected benefit to the community</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex gap-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#E6F7F7] text-[#00A9A5] flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Community Governance</h3>
                  <p className="text-gray-600">
                    Proposals are voted on by community members. Voting power is determined by:
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
                    <li>FUKU token holdings</li>
                    <li>Reputation score within the community</li>
                    <li>Contribution history to the ecosystem</li>
                  </ul>
                  <p className="mt-2 text-gray-600">
                    All voting is transparent and recorded on-chain for full accountability.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex gap-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#E6F7F7] text-[#00A9A5] flex-shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Implementation & Accountability</h3>
                  <p className="text-gray-600">
                    Approved proposals receive funding through a milestone-based system:
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
                    <li>Funds are released as project milestones are achieved</li>
                    <li>Regular progress updates are required from fund recipients</li>
                    <li>Community members can monitor progress and expenditures</li>
                    <li>Final outcomes are documented and shared with the community</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-100">Current Fund Statistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-[#00A9A5] mb-2">75,000</div>
              <div className="text-gray-600">FUKU Tokens in Fund</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-[#00A9A5] mb-2">12</div>
              <div className="text-gray-600">Projects Funded</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-[#00A9A5] mb-2">1,845</div>
              <div className="text-gray-600">DAO Members</div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-100">Featured Projects</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 md:h-auto h-48">
                  <Image
                    src="/assets/coworking.jpeg"
                    alt="Nomad-Friendly Coworking"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-800">Nomad-Friendly Coworking</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Completed</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Funded: 15,000 FUKU • June 2025</p>
                  <p className="text-gray-600 mb-4">
                    Created a comprehensive directory of businesses in Fukuoka that cater to digital nomads,
                    including those with good wifi, workspaces, and English-speaking staff.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                    <p className="text-sm text-gray-600">Proposed by: Alex Chen</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 md:h-auto h-48">
                  <Image
                    src="/assets/tech_conference.jpeg"
                    alt="Fukuoka Tech Conference 2025"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-800">Fukuoka Tech Conference 2025</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">In Progress</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Funded: 25,000 FUKU • July 2025</p>
                  <p className="text-gray-600 mb-4">
                    A two-day conference bringing together local and international tech professionals 
                    to share knowledge and build connections within the Fukuoka tech ecosystem.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                    <p className="text-sm text-gray-600">Proposed by: Yuki Tanaka</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 md:h-auto h-48">
                  <Image
                    src="/assets/co_living.jpeg"
                    alt="Nomad Co-Living Space Startup"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-800">Nomad Co-Living Space Startup</h3>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Voting Active</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Requested: 35,000 FUKU • Vote ends: August 15, 2025</p>
                  <p className="text-gray-600 mb-4">
                    Seed funding for a new co-living space specifically designed for digital nomads,
                    featuring workspaces, community areas, and integration with the Fukuoka Nomad Connect ecosystem.
                  </p>
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                      <div className="bg-[#00A9A5] h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>65% Approval</span>
                      <span>3 days left</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-100">How to Participate</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-gray-800">Submit a Proposal</h3>
              <p className="text-gray-600 mb-4">
                Have an idea that could benefit the Fukuoka digital nomad community? 
                Submit a proposal to request funding from the Community Fund.
              </p>
              <Link 
                href="#" 
                className="inline-block bg-[#00A9A5] hover:bg-[#008b88] text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Create Proposal
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-gray-800">Vote on Proposals</h3>
              <p className="text-gray-600 mb-4">
                Help shape the future of the Fukuoka nomad ecosystem by voting on 
                funding proposals with your FUKU tokens and reputation.
              </p>
              <Link 
                href="#" 
                className="inline-block bg-[#00A9A5] hover:bg-[#008b88] text-white font-medium py-2 px-4 rounded transition-colors"
              >
                View Active Proposals
              </Link>
            </div>
          </div>
        </section>
        
        <section className="bg-[#F8F9FA] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Join the Community Fund DAO</h2>
          <p className="mb-6 text-gray-700">
            Getting your Nomad Welcome Pass NFT is the first step to participating in 
            the Community Fund governance.
          </p>
          <Link 
            href="/get-pass" 
            className="inline-block bg-[#00A9A5] hover:bg-[#008b88] text-white font-medium py-2 px-6 rounded transition-colors"
          >
            Get Your Pass
          </Link>
        </section>
      </div>
    </div>
  );
}