import { useParams } from "react-router"


function Page3() {
    const {id} = useParams()
    console.log(id)  

    return (
        <div className="h-[100dvh] w-screen bg-slate-200">
            
        </div>
    )
}

export default Page3
