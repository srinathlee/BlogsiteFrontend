import Home from "./components/home";
import Navbar from "./utils/navbar";
import LoginPage from "./components/loginpage";
import Register from "./components/register";
import BlogView from "./components/blogView";
import UserProfile from "./components/userProfile";
import UserLibrary from "./components/userLibrary";
import HelpPage from "./components/help";
import Writeblog from "./components/writeblog";
import Protectedroute from "./utils/protectedroute";
import PageNotFoud from "./components/pageNotFoud";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./components/about";

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
        path: "/blogs/:id",
        element: <BlogView />,
      },
      {
        path: "/help",
        element: <HelpPage/>,
      }
      ,
      {
        path: "/about",
        element: <About/>,
      }
      ,
      {
        path: "/writeblog",
        element: <Writeblog/>,
      },
      {
        path: "/user",
        element: <Protectedroute />,
        children:[
          {path:'/user',
            element:<UserProfile/>
          }
        ]
      },
      {
        path: "/library",
        element: <Protectedroute/>,
        children:[
          {path:'/library',
            element:<UserLibrary/>
          }
        ]
      }
    ],
  },
  {
    path:"*",
    element:<PageNotFoud/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
