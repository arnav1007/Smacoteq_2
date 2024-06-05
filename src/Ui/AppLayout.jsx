import { useParams } from "react-router"
import Header from "../Components/Header"

<<<<<<< HEAD
function AppLayout({children }) {
   
=======
function AppLayout({children , currectRouteNumber }) {

    console.log('currectRouteNumber' ,currectRouteNumber)
>>>>>>> v1

    return (
        <div className="h-[100dvh] w-[100dvw] bg-main overflow-y-auto overflow-x-hidden relative">
            <Header currectRouteNumber={currectRouteNumber}/>
            {children}
            
        </div>
    )
}

export default AppLayout
