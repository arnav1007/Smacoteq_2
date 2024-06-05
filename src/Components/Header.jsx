import NavLinkButton from "../Ui/NavLinkButton";
import Burger from "../Ui/Burger";
import Logo from "../Ui/Logo";
import { NavLink } from "react-router-dom";

function Header({currectRouteNumber}) {

  console.log('currectRouteNumber form Header' , currectRouteNumber)
  return (
    <div
      className={`fixed top-0 z-10 flex h-[10dvh] w-full items-center justify-between ${currectRouteNumber===2 ? 'bg-white' : 'bg-main'} px-12 align-middle`}
    >
      <NavLink to="/">

      <Logo currectRouteNumber={currectRouteNumber}/>
      </NavLink>
      <div className="flex space-x-4 ml-auto mr-40 gap-20">
        <NavLinkButton currectRouteNumber={currectRouteNumber} to="/" text="VISION" />
        <NavLinkButton currectRouteNumber={currectRouteNumber} to="/ARTH.BHUMI/WhatWeDo" text="ABOUT US" />
      </div>
      <Burger currectRouteNumber={currectRouteNumber}/>
    </div>
  );
}

export default Header;
