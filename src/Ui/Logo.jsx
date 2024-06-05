function Logo({currectRouteNumber}) {
    return (
        <img src={currectRouteNumber===2 ?"/Logo_dark.png" : "/Logo.png"} alt="" height={350} width={350}/>
    )
}

export default Logo
