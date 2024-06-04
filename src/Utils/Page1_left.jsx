import CustomFooter from "../Components/CustomFooter";

function Page1_left() {
  return (
    <div className="flex h-full w-full">
      {/* handling the left side of the Page1_left */}
      <div className="flex h-full w-8/12 flex-col items-start justify-around pl-10 align-middle">
        <div className="h-4/6  pt-14">
          <h1 className="text-white font-ibarra text-3xl my-2">
            Transforming Gloabl Trade - Seamless,
            <br />
            Secure, and Sustainable
          </h1>
          <h3 className="text-light_text font-ibarra mb-5">
            We believe at Smacoteq that we should{" "}
            <span className="text-white">Trade for a Better Future.</span>
            <br />
            Change our ways to make future possible{" "}
            <span className="text-white">For Our COming Generations</span>
          </h3>
          <a href="" className="text-white  mt-10 text-sm">
            Read our Whitepaper here
          </a>
        </div>

        {/* the component custom footer goes here in bellow div */}
        <div className="h-1/6 w-full  flex justify-center align-middle">
            <CustomFooter active={1}/>
        </div>
      </div>

      {/* handling the right side of the Page1_left */}
      <div className="h-full w-4/12"></div>
    </div>
  );
}

export default Page1_left;
