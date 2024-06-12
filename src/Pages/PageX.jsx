import { useParams } from "react-router";
import CustomFooter from "../Components/CustomFooter";
import Button from "../Ui/Button";
import Maritime from "../Ui/Maritime";

function PageX() {
  return (
    <div className="relative h-[100dvh] w-screen overflow-y-hidden bg-page3 pt-[10vh]">
      <div className="absolute bottom-1 right-5 h-[300px] w-[90px]">
        <Maritime text="BLOCKCHAIN" />
      </div>
      <div className="flex h-[80dvh] w-full">
        <div className="my-auto grid h-full w-4/12 place-content-center">
          <img src="/Character.png" alt="" />
        </div>
        <div className="h-full w-8/12 overflow-y-auto pr-20 pt-[7dvh] font-ibarra text-light_text_page3">
          <h1 className="my-3 text-2xl text-main">
            eBL-Electronic Bill of Landing Service
          </h1>
          <div>
            <p>
              Our eBL (electronic Bill of Landing) revolutionize the management
              of trade documents by digitizing and securing them with
              cutting-edge blockchain technology. By leveraging a public
              blockchain and Decentralized IPFS (InterPlanetary File System),
              all trade documents and images are stored on a decentralized file
              system. This approach guarantees that every document is
              tamper-proff, easily verifiable, and immutable. securely
              transferable and permenanetly stored, enhancing the integrity and
              efficiency of trade documentations
            </p>
          </div>
          <p className="my-5">Key Features</p>
          <div>
            <p>
              BlockChain Security: Ensuring tamperproof transaction and document
              integrity.
            </p>
            <p>
              Decentralized IPFS Storage: Enhancing data security by storing
              documents on a decentralized Inter Planetary file system.
            </p>
            <p>
              Real-TimeNotification :Keeping users informed about the documents
              status and required actions.
            </p>
            <p>
              Seamless Integration: Compatible with existing ERP and logistics
              systems for smooth operations.
            </p>
          </div>

          <p className="my-5">
            Smacoteq aims to make this innovative solution accesible not only to
            large corporations but also to SMEs enhancing efficienct for
            business of all sizes
          </p>

          <p className="my-5">
            <Button type={"small"} to={"https://www.google.com/"}>
              LAUNCH APP
            </Button>
            {/* Button stating LAUNCH APP(ebl.smacoteq.com)
            (https://ebl.smacoteq.com)-Redirecting to the platform */}
          </p>
        </div>
      </div>
      <div className="h-[10dvh] w-7/12">
        <CustomFooter active={2} page3={true} />
      </div>
    </div>
  );
}

export default PageX;
