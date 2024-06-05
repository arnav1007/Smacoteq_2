function Burger({currectRouteNumber}) {
  return (  
    <img src={currectRouteNumber===2 ? "/Menu_dark.png" :"/MenuIcon.png"} alt="" height={50} width={25}/>
  
  )
}

export default Burger;
