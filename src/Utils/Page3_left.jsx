import CustomFooter from "../Components/CustomFooter";

function Page3_left() {
  return (
    <div className="flex h-full w-full">
      {/* handling the left side of the Page1_left */}
      <div className="flex h-full w-8/12 flex-col items-start justify-around pl-10 align-middle">
        <div className="h-4/6 ">
          <img src="/Character.png" alt="" />
        </div>

        {/* the component custom footer goes here in bellow div */}
        <div className="h-1/6 w-full  flex justify-center align-middle">
            <CustomFooter active={2}/>
        </div>
      </div>

      {/* handling the right side of the Page1_left */}
      <div className="h-full w-4/12"></div>
    </div>
  );
}

export default Page3_left;
