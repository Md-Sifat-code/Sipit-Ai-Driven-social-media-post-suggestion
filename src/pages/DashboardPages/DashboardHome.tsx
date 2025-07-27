
const DashboardHome = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome to SiPT Dashboard
        </h1>
        <p className="text-gray-600">
          AI-Driven Social Media Post Suggestions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Post Generation
          </h3>
          <p className="text-gray-600 text-sm">
            Create engaging social media posts with AI assistance
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Analytics
          </h3>
          <p className="text-gray-600 text-sm">
            Track your post performance and engagement
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Community
          </h3>
          <p className="text-gray-600 text-sm">
            Connect with other content creators
          </p>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
