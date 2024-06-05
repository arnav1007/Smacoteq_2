import Maritime from "../Ui/Maritime"
import PageNumber from "../Ui/PageNumber"

function Page1_right() {
    return (
        <div className="h-full w-full relative flex align-middle justify-center items-center">
            <PageNumber number={"01"}/>
            <Maritime text={Maritime}/>
        </div>
    )
}

export default Page1_right
