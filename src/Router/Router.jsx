import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Pricing from "../pages/Pricing/Pricing";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/Blog/BlogDetails";
import BlogGrid from "../pages/Blog/BlogGrid";
import Service from "../pages/Service/Service";
import ServiceDetails from "../pages/Service/ServiceDetails";
import Team from "../pages/Team/Team";
import TeamDetails from "../pages/Team/TeamDetails";
import PortOneColunm from "../pages/Portfolio.jsx/PortOneColunm";
import PortTwoColumn from "../pages/Portfolio.jsx/PortTwoColumn";
import PortfolioDetails from "../pages/Portfolio.jsx/PortfolioDetails";
import SignUp from "../pages/Account/SignUp";
import SignIn from "../pages/Account/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog_grid",
        element: <BlogGrid></BlogGrid>,
      },
      {
        path: "/blog_details",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/service_details",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/team",
        element: <Team></Team>,
      },
      {
        path: "/team_details",
        element: <TeamDetails></TeamDetails>,
      },
      {
        path: "/port_oneColumn",
        element: <PortOneColunm></PortOneColunm>,
      },
      {
        path: "/port_twoColumn",
        element: <PortTwoColumn></PortTwoColumn>,
      },
      {
        path: "/port_details",
        element: <PortfolioDetails></PortfolioDetails>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);
export default router;
