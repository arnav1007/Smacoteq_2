import { NavLink, useParams } from "react-router-dom";

function CustomFooter({ active  , page3}) {
  

  return (
    <footer className="flex w-full items-center justify-between pl-14 align-middle text-[13px] text-footer_light">
      <img src="/lang.png" alt="" height={30} width={30} />
      <ul className={`flex gap-3 rounded-md border ${!page3 ? 'border-white' : 'border-main'} px-3 py-1`}>
        <li className={active === 1 ? "text-white" : ""}>WHAT WE THING</li>
        <NavLink to='/ARTH.BHUMI/WhatWeDo'>
          <li className={page3 ? "text-main font-semibold" : ""}>WHAT WE DO</li>
        </NavLink>
        <li className={active === 3 ? "text-white" : ""}>WHICH BUSINESS</li>
      </ul>
      <img src="/logo_only.png" alt="" height={20} width={25} />
      <h3>WHAT WE ARE</h3>
      <h3>CONTACT</h3>
    </footer>
  );
}

export default CustomFooter;
