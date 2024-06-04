import CustomFooter from "../Components/CustomFooter";
import Maritime from "./Maritime";
import PageNumber from "./PageNumber";

function PageLayout({children, number }) {
  return (
    <div className="flex h-full w-full ">
      <div className="h-full w-11/12">
        <div className="h-5/6 =flex">
          <div className="h-full w-8/12 overflow-y-auto">

          {children}
          </div>
          <div className="h-full w-4/12 "></div>

          
          </div>
        <div className="  flex h-1/6 w-8/12 justify-center align-middle">
          <CustomFooter active={1} />
        </div>
      </div>
      <div className="h-full w-1/12">
        <div className="relative flex h-full w-full items-center justify-center align-middle">
          <PageNumber number={number} />
          <Maritime />
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
