import { NavLink, useParams } from "react-router-dom";

function CustomFooter({ active }) {
    const{id} = useParams();
    console.log('id caught from CustomHeader.jsx', id)

    

    // if(id === 'WhatWeDo'){
    //     setTheme('dark')
    // }else{
    //     setTheme('light')
    // }
    // console.log(theme)

  return (
    <footer className="flex w-full items-center justify-between pl-14 align-middle text-[13px] text-footer_light">
      <img src="/lang.png" alt="" height={30} width={30} />
      <ul className="flex gap-3 rounded-md border border-white px-3 py-1">
        <li className={active === 1 ? "text-white" : ""}>WHAT WE THING</li>
        <NavLink to='/ARTH.BHIM/WhatWeDo'>
          <li className={active === 2 ? "text-white" : ""}>WHAT WE DO</li>
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
