
const DashboardPAckageandPricing = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Package & Pricing
        </h1>
        <p className="text-gray-600">
          Choose the perfect plan for your content creation needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Free</h3>
          <p className="text-3xl font-bold text-gray-900 mb-4">$0<span className="text-lg text-gray-500">/month</span></p>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>✓ 10 posts per day</li>
            <li>✓ Basic templates</li>
            <li>✓ Community access</li>
            <li>✗ Priority support</li>
          </ul>
          <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md font-medium">
            Current Plan
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-teal-500 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Popular
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pro</h3>
          <p className="text-3xl font-bold text-gray-900 mb-4">$19<span className="text-lg text-gray-500">/month</span></p>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>✓ Unlimited posts</li>
            <li>✓ Premium templates</li>
            <li>✓ Priority support</li>
            <li>✓ Analytics dashboard</li>
          </ul>
          <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-md font-medium hover:bg-teal-700">
            Upgrade Now
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise</h3>
          <p className="text-3xl font-bold text-gray-900 mb-4">$49<span className="text-lg text-gray-500">/month</span></p>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>✓ Everything in Pro</li>
            <li>✓ Team collaboration</li>
            <li>✓ Custom integrations</li>
            <li>✓ Dedicated support</li>
          </ul>
          <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md font-medium hover:bg-gray-200">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardPAckageandPricing
