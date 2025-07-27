
const DashboardCommunity = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Community Feed
        </h1>
        <p className="text-gray-600">
          Connect with other content creators and share your experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-teal-500 pl-4">
              <p className="text-sm text-gray-600">Tips for creating engaging content...</p>
              <span className="text-xs text-gray-400">2 hours ago</span>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-sm text-gray-600">Best practices for social media...</p>
              <span className="text-xs text-gray-400">4 hours ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Members</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">J</span>
              </div>
              <span className="text-sm text-gray-700">John Creator</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">S</span>
              </div>
              <span className="text-sm text-gray-700">Sarah Marketer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCommunity
