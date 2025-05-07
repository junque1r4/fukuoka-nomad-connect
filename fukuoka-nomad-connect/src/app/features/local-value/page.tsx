import Image from 'next/image';
import Link from 'next/link';

export default function LocalValue() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-100">Local Value Exchange</h1>
          <p className="text-gray-300">Supporting Fukuoka's local economy while rewarding nomads</p>
        </div>
        
        <div className="mb-12">
          <div className="bg-[#F8F9FA] p-6 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">What is Local Value?</h2>
                <p className="mb-4 text-gray-700">
                  Local Value is our initiative to create meaningful economic connections between 
                  digital nomads and Fukuoka's vibrant local businesses.
                </p>
                <p className="text-gray-700">
                  By incentivizing nomads to spend at local establishments and rewarding 
                  businesses for welcoming the nomad community, we create a virtuous cycle 
                  that benefits everyone.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/assets/solana_pay_fuku.png" 
                  alt="Local Value System"
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#E6F7F7] text-[#00A9A5] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">Pay with Solana Pay</h3>
              <p className="text-gray-600">
                Use your Solana wallet to make purchases at participating local businesses.
                Quick QR code scanning makes payments seamless.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#E6F7F7] text-[#00A9A5] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">Earn FUKU Tokens</h3>
              <p className="text-gray-600">
                Receive FUKU token rewards with every purchase. The more you support local businesses,
                the more rewards you collect.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#E6F7F7] text-[#00A9A5] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">Access Community Benefits</h3>
              <p className="text-gray-600">
                Use your FUKU tokens for exclusive discounts, community events,
                and voting rights in the Community Fund.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-100">Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-100">For Digital Nomads</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#00A9A5] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Discover authentic local experiences and businesses</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#00A9A5] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Earn rewards that increase your participation in the community</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#00A9A5] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Build your local reputation and connection to Fukuoka</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#00A9A5] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Track your positive economic impact on the city</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-100">For Local Businesses</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#00A9A5] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Attract an international customer base of digital professionals</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#00A9A5] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Zero setup costs with simple QR code payment integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#00A9A5] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Lower transaction fees than traditional payment processors</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#00A9A5] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Participate in community initiatives and special promotions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-100">Participating Businesses</h2>
          <p className="mb-6 text-gray-300">
            Our network of local partners is growing! These businesses are ready to welcome 
            you with special offers and FUKU token rewards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                {item === 1 ? (
                  <Image
                    src="/assets/cafe1.jpeg"
                    alt="Kuoki Cyber-Cafe"
                    width={300} 
                    height={160}
                    className="w-full h-40 object-cover"
                  />
                ) : item === 2 ? (
                  <Image
                    src="/assets/boutique.png"
                    alt="Chic Kego Boutique"
                    width={300}
                    height={160}
                    className="w-full h-40 object-cover"
                  />
                ) : item === 3 ? (
                  <Image
                    src="/assets/skaa_popup_shop.jpeg"
                    alt="Skaa Kone"
                    width={300}
                    height={160}
                    className="w-full h-40 object-cover"
                  />
                ) : item === 4 ? (
                  <Image
                    src="/assets/food_truck.jpeg"
                    alt="Nomad Nibbles"
                    width={300}
                    height={160}
                    className="w-full h-40 object-cover"
                  />
                ) : item === 5 ? (
                  <Image
                    src="/assets/karate_dojo.jpeg"
                    alt="Ohori Park Dojo"
                    width={300}
                    height={160}
                    className="w-full h-40 object-cover"
                  />
                ) : item === 6 ? (
                  <Image
                    src="/assets/old_teacher_bookshop.jpeg"
                    alt="The Scholar's Nook"
                    width={300}
                    height={160}
                    className="w-full h-40 object-cover"
                  />
                ) : (
                  <div className="h-40 bg-gray-200"></div>
                )}
                <div className="p-4">
                  <h3 className="font-medium text-gray-800">
                    {item === 1 ? 'Kuoki Cyber-Cafe' : item === 2 ? 'Chic Kego Boutique' : item === 3 ? 'Skaa Kone' : item === 4 ? 'Nomad Nibbles' : item === 5 ? 'Ohori Park Dojo' : item === 6 ? "The Scholar's Nook" : `Sample Business ${item}`}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item === 1 ? 'Coffee Shop • Tenjin' : item === 2 ? 'Fashion Apparel • Kego' : item === 3 ? 'Artisanal Ice Cream • Daimyo' : item === 4 ? 'Global Street Food • Maizuru Park (Weekends)' : item === 5 ? 'Traditional Karate • Ohori Park' : item === 6 ? "Used Books & Cafe • Hakata" : 'Category • Neighborhood'}
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="text-[#00A9A5] text-sm font-medium">2% FUKU rewards</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="mb-4 text-gray-300">Are you a local business owner interested in joining our network?</p>
            <Link 
              href="#" 
              className="inline-block bg-[#00A9A5] hover:bg-[#008b88] text-white font-medium py-2 px-6 rounded transition-colors"
            >
              Apply to Partner
            </Link>
          </div>
        </section>
        
        <section className="bg-[#F8F9FA] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Get Started?</h2>
          <p className="mb-6 text-gray-700">
            Getting your Nomad Welcome Pass is the first step to participating in our Local Value system.
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