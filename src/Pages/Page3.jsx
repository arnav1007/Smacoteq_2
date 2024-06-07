import { useParams } from "react-router";
import CustomFooter from "../Components/CustomFooter";
import Button from "../Ui/Button";
import Maritime from "../Ui/Maritime";

function Page3() {
  return (
    <div className="bg-page3 h-[100dvh] w-screen pt-[10vh] relative overflow-y-hidden">
      <div className="h-[300px] w-[90px] absolute right-5 bottom-1">
        <Maritime text="BLOCKCHAIN"/>
      </div>
      <div className="flex h-[80dvh] w-full ">
        <div className=" grid h-full w-4/12 place-content-center my-auto">
          <img src="/Character.png" alt="" />
        </div>
        <div className=" overflow-y-auto text-light_text_page3 h-full w-8/12 font-ibarra pt-[7dvh] pr-20">
          <h1 className="text-main text-2xl my-3">eBL-Electronic Bill of Landing Service</h1>
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
      <div className="h-[10dvh] w-7/12  ">
        <CustomFooter active={2} page3={true}/>
      </div>
    </div>
  );
}

export default Page3;
