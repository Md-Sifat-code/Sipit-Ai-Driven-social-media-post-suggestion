import { Outlet } from "react-router-dom"
import LeftNavbar from "./LeftNavbar"

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <LeftNavbar />
      <main className="flex-1 lg:ml-0 overflow-hidden">
        <div className="pt-16 lg:pt-0 px-4 lg:px-8 py-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
