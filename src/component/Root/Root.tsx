import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SideMenu from "../sidemenu/SideMenu";

function Root() {
  return (
    <>
      <Header />
      <SideMenu />
      <div className="main">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
