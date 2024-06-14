import NavLinkButton from "../Ui/NavLinkButton";
import Burger from "../Ui/Burger";
import Logo from "../Ui/Logo";
import { NavLink } from "react-router-dom";

function Header({ currectRouteNumber , openMenu }) {

  console.log('currectRouteNumber form Header', currectRouteNumber)
  return (
    <div
      className={`fixed top-0 z-30 flex h-[10dvh] w-full items-center justify-between ${currectRouteNumber === 2 ? 'rgb(229, 231, 235)' : 'bg-main'} px-12 align-middle`}
    >
      <NavLink to="/">
        <Logo currectRouteNumber={currectRouteNumber} />
      </NavLink>
      <div className="flex items-center gap-[30px] ml-auto">
        <NavLinkButton currectRouteNumber={currectRouteNumber} to="/Smacoteq/Vision" text="VISION" />
        <NavLinkButton currectRouteNumber={currectRouteNumber} to="/Smacoteq/AboutUs" text="ABOUT US" />
        <Burger currectRouteNumber={currectRouteNumber} openMenu={openMenu} />
      </div>
    </div>
  );
}

export default Header;
