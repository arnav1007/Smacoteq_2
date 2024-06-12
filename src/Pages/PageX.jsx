
import CustomFooter from "../Components/CustomFooter";

import Maritime from "../Ui/Maritime";

function PageX() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-page3 flex flex-col justify-between">
      <div className="pt-16 md:pt-28 flex-grow">
        <div className="absolute bottom-1 right-5 h-[300px] w-[90px]">
          <Maritime text="BLOCKCHAIN" />
        </div>
        <div className="flex flex-col md:flex-row h-full w-full">
          <div className="flex justify-center items-center h-full w-full md:w-4/12">
            <img src="/Character.png" alt="Character" className="max-w-full h-auto" />
          </div>
          <div className="flex flex-col justify-center h-full w-full md:w-6/12 px-6 md:px-20 font-ibarra text-light_text_page3">
            <h1 className="my-1 text-main font-['Ibbara_Real_Nova'] text-[34px]">
              ARTH.BHUMI
            </h1>
            <h2 className="my-3 font-['Ibbara_Real_Nova'] text-[20px] text-black">
              Feature and Services
            </h2>
            <div className="font-['Ibbara_Real_Nova'] text-[15px] text-black">
              <p>ARTH strives to bring in efficiency & surplus benefits to businesses optimizing</p>
              <p>supply chains leveraging technologies at our disposal in the best way possible.</p>
            </div>

            <div className="mt-8 mx-10 text-[15px] font-['Ibbara_Real_Nova']">
              <p>
                <span className="text-black">Commodity Tokenization:</span> Quality assured commodities are <span className="text-black">Tokenized on the Polygon </span>Blockchain network. Ownership of these commodities is symbolized by NFTs on the Blockchain.
              </p>
              <p>
                <span className="text-black">Electronic Bill of Lading:</span> Ensure secure and reliable trade with our digitized system that<span className="text-black"> lowers overhead cost </span>of paper and reduces unnecessary demurrage and detention charges of holding cargo due to delay in documentation.
              </p>
              <p>
                <span className="text-black">Trade Finance Facilitation:</span> Import and Export Finance through <span className="text-black">AntelopeFi.xyz </span>which makes it possible through systems built on top of <span className="text-black"> De-Fi </span>(Decentralized finance) Protocols.
              </p>
              <p>
                <span className="text-black">Cross-border Payment Settlements:</span> Make International Financial transactions seamless without hefty fees with our inclusive and efficient payment system.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10vh] w-full md:w-7/12">
        <CustomFooter active={2} page3={true} />
      </div>
    </div>
  );
}

export default PageX;
