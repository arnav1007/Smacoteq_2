import { useParams } from "react-router";
import CustomFooter from "../Components/CustomFooter";
import Button from "../Ui/Button";
import Maritime from "../Ui/Maritime";

function PageX() {
  return (
    <div className="relative h-[100dvh] w-screen overflow-hidden bg-page3 pt-[10vh]">
      <div className="absolute bottom-1 right-5 h-[300px] w-[90px]">
        <Maritime text="BLOCKCHAIN" />
      </div>
      <div className="flex h-[80dvh] w-full">
        <div className="my-auto grid h-full w-4/12 place-content-center">
          <img src="/Character.png" alt="" />
        </div>
        <div className="h-full w-6/12 pr-20 pt-[7dvh] font-ibarra text-light_text_page3" style={{ fontSize: "14px" }}>
          <h1 className="my-1 text-main" style={{ fontFamily: "Ibbara Real Nova", fontSize: "34px" }}>
            ARTH.BHUMI
          </h1>
          <h2 className="my-3 " style={{ fontFamily: "Ibbara Real Nova", fontSize: "20px", color: "black" }}>
            Feature and Services
          </h2>
          <div style={{ fontFamily: "Ibbara Real Nova", fontSize: "15px", color: "black" }}>
            <p>
              ARTH strives to bring in efficiency & surplus benefits to businesses optimizing
            </p>
            <p>
              supply chains leveraging technologies at our disposal in the best way possible.
            </p>
          </div>

          <div className="mx-20 mt-8 class1" style={{ fontSize: "12", fontFamily: "Roboto" }}>
            <p >
              <span style={{ color: "black" }}>Commodity Tokenization:</span> Quality assured commodities are <span style={{ color: "black" }}>Tokenized on the Polygon </span>Blockchain network. Ownership of these commodities is symbolized by NFTs on the Blockchain.
            </p>
            <p>
              <span style={{ color: "black" }}>Electronic Bill of Lading:</span> Ensure secure and reliable trade with our digitized system that<span style={{ color: "black" }}> lowers overhead cost </span>of paper and reduces unnecessary demurrage and detention charges of holding cargo due to delay in documentation.
            </p>
            <p>
              <span style={{ color: "black" }}>Trade Finance Facilitation:</span> Import and Export Finance through <span style={{ color: "black" }}>AntelopeFi.xyz </span>which makes it possible through systems built on top of <span style={{ color: "black" }}> De-Fi </span>(Decentralized finance) Protocols.
            </p>
            <p>
              <span style={{ color: "black" }}>Cross-border Payment Settlements:</span> Make International Financial transactions seamless without hefty fees with our inclusive and efficient payment system.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[10dvh] w-7/12">
        <CustomFooter active={2} page3={true} />
      </div>
    </div>
  );
}

export default PageX;
