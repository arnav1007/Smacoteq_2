import { useParams } from "react-router"
import Header from "../Components/Header"
import Menu from "../Components/Menu"
import { useState } from "react"

function AppLayout({children , currectRouteNumber }) {

    const[isMenuOpen , setIsMenuOpen] = useState(false);

    function openMenu(){
        setIsMenuOpen(s=>!s)
    }

    return (
        <div className="h-[100dvh] w-[100dvw] bg-main overflow-y-auto overflow-x-hidden relative">
            <Header currectRouteNumber={currectRouteNumber} openMenu={openMenu} />
            <Menu isMenuOpen={isMenuOpen}/>
            {children} 


        </div>
    )
}

export default AppLayout
