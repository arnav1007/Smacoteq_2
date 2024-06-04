import PageLayout from "../Ui/PageLayout"
import Page1_left from "../Utils/Page1_left"
import Page1_right from "../Utils/Page1_right"

function Page1() {
    return (
        <div className="h-[90dvh] w-full relative mt-[10dvh]">
            <PageLayout
                left = {<Page1_left />}
                right = {<Page1_right/>}
            />
        </div>
    )
}

export default Page1
