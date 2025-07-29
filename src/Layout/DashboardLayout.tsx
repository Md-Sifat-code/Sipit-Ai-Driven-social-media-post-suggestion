import { Outlet } from "react-router-dom"
import LeftNavbar from "./LeftNavbar"
import ProfileModal from "./ProfileModal"

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-[#1c1c1c]">
      <LeftNavbar />
      <ProfileModal />
      <main className="flex-1 h-screen overflow-y-auto">
        <div className="pt-10 mt-10 px-[2%] md:px-[3%] min-h-full">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
