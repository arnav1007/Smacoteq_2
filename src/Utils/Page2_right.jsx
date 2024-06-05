import Maritime from "../Ui/Maritime"
import PageNumber from "../Ui/PageNumber"

function Page2_right() {
    return (
        <div className="h-full w-full relative flex align-middle justify-center items-center">
            
            <PageNumber number={"02"}/>
            <Maritime text={Maritime}/>
        </div>
    )
}

export default Page2_right
