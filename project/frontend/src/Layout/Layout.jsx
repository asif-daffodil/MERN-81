import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { useEffect } from "react";
import Cookies from "js-cookie";

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    !Cookies.get('fbuserinfo') && navigate('/login');
})
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <Sidebar />
        <Outlet className="" />
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
