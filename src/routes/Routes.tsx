import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/NotFound";

import Home from "../pages/Home";
import MainLayout from "../Layout/MainLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "../pages/DashboardPages/DashboardHome";
import DashboardCommunity from "../pages/DashboardPages/DashboardCommunity";
import DashboardPAckageandPricing from "../pages/DashboardPages/DashboardPAckageandPricing";
import DasboardDisclaimer from "../pages/DashboardPages/DasboardDisclaimer";
import DashboardSupportCenter from "../pages/DashboardPages/DashboardSupportCenter";
import Login from "../pages/Login";
import Register from "../pages/Register";


import PremiumCheckout from "../pages/DashboardPages/PremiumCheckout";
import Profile from "../pages/DashboardPages/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/register',
    element: <Register />
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        index: true,
        path: "/dashboard/home",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/community",
        element: <DashboardCommunity></DashboardCommunity>,
      },
      {
        path: "/dashboard/package",
        element: <DashboardPAckageandPricing />,
      },
      {
        path: "/dashboard/package/premium-checkout",
        element: <PremiumCheckout />,
      },
      {
        path: "/dashboard/disclaimer",

        element: <DasboardDisclaimer />,
      },
      {
        path: "/dashboard/support",
        element: <DashboardSupportCenter />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
