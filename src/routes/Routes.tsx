import { createBrowserRouter } from "react-router-dom";


import NotFound from "../pages/NotFound";

import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "../pages/DashboardPages/DashboardHome";
import DashboardCommunity from "../pages/DashboardPages/DashboardCommunity";
import DashboardPAckageandPricing from "../pages/DashboardPages/DashboardPAckageandPricing";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path : "/",
        element : <Home/>
      }
    ]
      
  },
  {
    path : "/dashboard",
    element : <DashboardLayout/>,
    children : [{
      path : "/dashboard",
      element : <DashboardHome/>
    },
    {
      path : "/dashboard/community",
      element : <DashboardCommunity></DashboardCommunity>
    },
    {
      path : "/dashboard/package",
      element : <DashboardPAckageandPricing/>
    },
    {
      path : "/dashboard/disclaimer",
      element : <D
    }
  ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
