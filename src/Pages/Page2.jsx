import PageLayout from "../Ui/PageLayout"
import Page2_left from "../Utils/Page2_left"
import Page2_right from "../Utils/Page2_right"
function Page2() {
    return (
        <div className="h-[90dvh] w-[100dvw] relative">
            <PageLayout left={<Page2_left />} right={<Page2_right/>}/>
        </div>
    )
}

export default Page2
