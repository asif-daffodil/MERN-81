import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const Layout = () => {
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
