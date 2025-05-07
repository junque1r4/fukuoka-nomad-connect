import Image from 'next/image';
import Link from 'next/link';

export default function SkillsHub() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">Skills Hub</h1>
          <p className="text-gray-600">Connect, share knowledge, and grow together in Fukuoka</p>
        </div>
        
        <div className="mb-12">
          <div className="bg-[#F8F9FA] p-6 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">What is the Skills Hub?</h2>
                <p className="mb-4">
                  Skills Hub is a community-powered platform where digital nomads and Fukuoka locals 
                  can exchange knowledge, skills, and services in a trustless, transparent environment.
                </p>
                <p>
                  Whether you're looking to share your expertise, learn something new, or collaborate 
                  on projects, Skills Hub facilitates meaningful connections that benefit everyone.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/assets/skills_hub.png" 
                  alt="Skills Hub Exchange"
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#E6F7F7] text-[#00A9A5] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Create Your Profile</h3>
              <p className="text-gray-600">
                List your skills, expertise, and the services you'd like to offer or 
                learn from others. All verified by your Nomad Welcome Pass NFT.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#E6F7F7] text-[#00A9A5] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Connect & Exchange</h3>
              <p className="text-gray-600">
                Browse the community, find matches for your needs, and initiate skill exchanges 
                or collaborations using our secure messaging system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#E6F7F7] text-[#00A9A5] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Build Reputation</h3>
              <p className="text-gray-600">
                Earn verifiable credentials and reviews after successful exchanges, 
                building your on-chain reputation in the community.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Featured Skills</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Web Development", 
              "Graphic Design", 
              "Language Exchange", 
              "Digital Marketing",
              "Photography", 
              "Content Creation", 
              "Local Guides", 
              "Data Analysis",
              "UX/UI Design", 
              "Japanese Culture", 
              "Business Strategy", 
              "Video Production"
            ].map((skill, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#00A9A5] transition-colors">
                <p className="text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Community Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Japanese-English Language Exchange</h3>
                  <p className="text-sm text-gray-500 mb-3">Maria (Spain) & Yuki (Fukuoka)</p>
                  <p className="text-gray-600">
                    "I was struggling with Japanese, and Yuki wanted to improve her English. 
                    We've been meeting weekly for coffee and language practice. My Japanese 
                    has improved tremendously, and we've become good friends!"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Website Development for Local Restaurant</h3>
                  <p className="text-sm text-gray-500 mb-3">Alex (Canada) & Tanaka Ramen</p>
                  <p className="text-gray-600">
                    "I built a modern website for Tanaka Ramen that helped them attract more 
                    foreign customers. In exchange, I got free ramen for months and valuable 
                    insights into Japanese business practices!"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Photography Workshop Series</h3>
                  <p className="text-sm text-gray-500 mb-3">Naomi (Fukuoka) & Digital Nomad Community</p>
                  <p className="text-gray-600">
                    "I've lived in Fukuoka my whole life and know all the best photo spots. 
                    I started hosting photography walks for nomads, showing them hidden gems 
                    while improving my English and making international friends."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">UX/UI Redesign Collaboration</h3>
                  <p className="text-sm text-gray-500 mb-3">Liam (UK) & Hiroshi (Fukuoka)</p>
                  <p className="text-gray-600">
                    "We connected through Skills Hub and ended up collaborating on a project 
                    that combined my UX expertise with Hiroshi's development skills. What started 
                    as a skill exchange turned into a profitable partnership!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Community Events</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="font-medium text-lg">Web3 Development Workshop</h3>
                  <p className="text-gray-600">Learn the basics of creating dApps on Solana</p>
                  <p className="text-sm text-gray-500 mt-1">July 15, 2025 • FCC Coworking Space</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-[#E6F7F7] text-[#00A9A5] py-1 px-3 rounded-full text-sm font-medium">
                    15 Spots Left
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="font-medium text-lg">Multi-cultural Business Networking</h3>
                  <p className="text-gray-600">Connect with local businesses and international professionals</p>
                  <p className="text-sm text-gray-500 mt-1">July 22, 2025 • Fukuoka Innovation Hub</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-[#E6F7F7] text-[#00A9A5] py-1 px-3 rounded-full text-sm font-medium">
                    32 Spots Left
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="font-medium text-lg">Design Thinking for Social Impact</h3>
                  <p className="text-gray-600">Learn how to apply design thinking to community challenges</p>
                  <p className="text-sm text-gray-500 mt-1">August 5, 2025 • Fukuoka City Library</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-[#E6F7F7] text-[#00A9A5] py-1 px-3 rounded-full text-sm font-medium">
                    8 Spots Left
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-[#F8F9FA] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Join the Skills Hub Community</h2>
          <p className="mb-6">
            Getting your Nomad Welcome Pass NFT is the first step to participating in our Skills Hub.
            Once you have your pass, you'll gain access to the full community platform.
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