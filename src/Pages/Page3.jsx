import Logo from "../Ui/Logo";
import Burger from "../Ui/Burger";
import PageLayout from "../Ui/PageLayout";
import Page3_right from "../Utils/Page3_right";
import Page3_left from "../Utils/Page3_left";


function Page3() {
  return (
    <div>
      <div className="h-[100dvh] w-[100dvw] bg-white overflow-y-auto overflow-x-hidden relative">
      <div className="fixed top-0 z-0  flex h-[15dvh] w-full items-center justify-between px-12 align-middle bg-white">
      <Logo />
      <p>Our Solutions</p>
      <Burger />
    </div>
            <div className="h-[90dvh] w-full relative mt-[10dvh]">
            <PageLayout
                left = {<Page3_left />}
                right = {<Page3_right/>}
            />
        </div>
        
        </div>
      
    </div>
  );
}

export default Page3