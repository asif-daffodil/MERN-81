import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import UpdateProfile from "./Pages/UpdateProfile";
import ChangePassword from "./Pages/ChangePassword";
import ProfileImage from "./Pages/ProfileImage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
        children: [
            { path: "/", element: <h1>Home</h1> },
            { path: "/contact", element: <h1>Contact</h1> },
        ],
    },
    {
      path: "/login",
      element: <Login />,
    },{
      path: "/signup",
      element: <Signup />,
    },{
      path: "/updateProfile",
      element: <UpdateProfile />,
    },{
      path: "/changePassword",
      element: <ChangePassword />,
    },{
      path: "/profileImage",
      element: <ProfileImage />,
    }
  ]);

export default router;