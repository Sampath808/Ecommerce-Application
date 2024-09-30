import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";

function LayoutWithNavbar() {
  return (
    <>
      <AppNavbar />
      <Outlet />
    </>
  );
}

export default LayoutWithNavbar;
