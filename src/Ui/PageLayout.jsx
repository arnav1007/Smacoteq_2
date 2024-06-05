import CustomFooter from "../Components/CustomFooter";
import Maritime from "./Maritime";
import PageNumber from "./PageNumber";
import { useRef, useEffect } from "react";

function PageLayout({ children, number }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      if (scrollRef.current) {
        const { deltaY } = e;
        scrollRef.current.scrollBy(0, deltaY);
      }
    };
    // Listen for mouse wheel events on the window
    window.addEventListener("wheel", handleScroll);

    // Cleanup listener to prevent memory leaks
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="flex h-full w-full relative">
      <img src="/block_left_top.png" alt="" className="absolute top-[5dvh] z-10" height={120} width={130}/>
      <img src="/block_right_bottom.png" alt="" className="absolute right-12 bottom-5 "/>
      <div className="h-full w-11/12">
        <div className="flex h-5/6">
          <div className="h-full w-8/12 overflow-y-hidden" ref={scrollRef}>
            {children}
          </div>
          <div className="h-full w-4/12"></div>
        </div>
        <div className="flex h-1/6 w-8/12 justify-center align-middle">
          <CustomFooter active={1} />
        </div>
      </div>
      <div className="h-full w-1/12">
        <div className="relative flex h-full w-full items-center justify-center align-middle">
          <PageNumber number={number} />
          <Maritime text="Maritime"/>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
