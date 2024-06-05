import { useParams } from "react-router";
import Burger from "../Ui/Burger";
import Logo from "../Ui/Logo";
import { useState } from "react";
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
      <Burger currectRouteNumber={currectRouteNumber}/>
    </div>
  );
}

export default Header;
