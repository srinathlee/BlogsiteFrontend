import Home from "./components/home";
import Navbar from "./utils/navbar";
import LoginPage from "./components/loginpage";
import Register from "./components/register";
import BlogView from "./components/blogView";
import UserProfile from "./components/userProfile";
import UserLibrary from "./components/userLibrary";
import HelpPage from "./components/help";
import Writeblog from "./components/writeblog";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout component as the wrapper
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blogs",
        element: <BlogView />,
      },
      {
        path: "/user",
        element: <UserProfile />,
      },
      {
        path: "/library",
        element: <UserLibrary />,
      },
      {
        path: "/help",
        element: <HelpPage/>,
      }
      ,
      {
        path: "/writeblog",
        element: <Writeblog/>,
      }
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
