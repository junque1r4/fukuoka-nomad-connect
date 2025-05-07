export default function Dashboard() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Nomad Dashboard</h1>
      
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Your Nomad Pass</h2>
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-full md:w-1/3 aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center p-4">
              <p className="text-gray-500">Your NFT will appear here</p>
              <button className="mt-4 bg-[#00A9A5] text-white px-4 py-2 rounded hover:bg-[#008b88] transition-colors">
                Connect Wallet
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="grid gap-4">
              <div>
                <h3 className="font-medium text-gray-600">Status</h3>
                <p>Not connected</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-600">Membership Level</h3>
                <p>None</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-600">Wallet</h3>
                <p>Not connected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Activity</h2>
          <div className="space-y-4">
            <p className="text-gray-500 text-center py-8">Connect your wallet to view your activity</p>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Rewards</h2>
          <div className="space-y-4">
            <p className="text-gray-500 text-center py-8">Connect your wallet to view your rewards</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Upcoming Events</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium">Nomad Meetup - Fukuoka Central Park</h3>
            <p className="text-gray-600">July 15, 2025 • 18:00 - 20:00</p>
            <p className="mt-2">Join fellow digital nomads for networking and knowledge sharing.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium">Web3 Workshop - Blockchain Basics</h3>
            <p className="text-gray-600">July 22, 2025 • 14:00 - 16:00</p>
            <p className="mt-2">Learn the fundamentals of blockchain technology.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-medium">Japanese Language Exchange</h3>
            <p className="text-gray-600">July 29, 2025 • 19:00 - 21:00</p>
            <p className="mt-2">Practice Japanese with locals and other nomads.</p>
          </div>
        </div>
      </div>
    </div>
  );
}