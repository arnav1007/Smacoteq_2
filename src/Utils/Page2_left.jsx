import CustomFooter from "../Components/CustomFooter";

function Page2_left() {
  return (
    <div className="flex h-full w-full">
      {/* handling the left side of the Page1_left */}
      <div className="flex h-full w-8/12 flex-col items-start justify-around pl-10 align-middle">
        <div className="h-4/6 pt-2">
          <h3 className="text-light_text font-ibarra mb-5">
            Discover the future of international commerce with us. Our mission:
            to revolutionize global trade using advanced digital technologies.
            With innovative solutions like Antelope Fi and Arth Bhumi, we're
            creating a seamless, secure and sustainable ecosystem for trade
            finance and International Trade Transactions. <br></br>Welcome to
            Smacoteq- Where GLoabel Trade Evolves
          </h3>

          <h3 className="text-light_text font-ibarra mb-5">
            Scroll Down and below displaying 3 services (Column format) with Images description/icon and button to redirect the user to the platform
          </h3>

          <ul className="text-light_text font-ibarra mb-5">
            <li>1. Smacoteq eBL Services (Button stating Click here redirecting to ebl-smacoteq.com)</li>
            <li>2. Arth Bhumi (Button stating launching soon)</li>
            <li>3. AntelopeFi (Button stating Launching soon)</li>

          </ul>
        </div>

        {/* the component custom footer goes here in bellow div */}
        <div className="flex h-1/6 w-full justify-center align-middle">
          <CustomFooter active={1} />
        </div>
      </div>

      {/* handling the right side of the Page1_left */}
      <div className="h-full w-4/12"></div>
    </div>
  );
}

export default Page2_left;
