function Page1() {
  return (
    <div className="align-start flex h-full flex-col items-start justify-center  pl-12 relative z-10">
      <div className="flex h-full w-full flex-col items-start justify-center ">
        <div className="text-white h-fit w-fit font-ibarra pt-[20dvh] text-3xl">
          <h1 >Building Sustainable and Scalabe</h1>
          <h1 >Decentralized Technologies</h1>
          <h1 >For The INdustry 4.0 Supply Chains</h1>
        </div>
        <div className="flex h-4/6 w-full pt-1">
          <div className="flex h-full w-1/12 justify-center align-middle  pt-8">
            <img src="/vertical_line.png" alt="" className="h-3/6" />
          </div>
          <div className="flex h-full w-11/12 flex-col gap-3 font-thin ">
            <div className="mt-4 flex h-[2dvh] w-7/12 items-center justify-center align-middle">
              <img src="/hirzontalline.png" alt="" className="h-[1px]" />
            </div>

            <p className="text-slate-100">
              eBL Tokenization ==> Built ontop of tradetrust to create & trade
              shipments related Does
            </p>
            <p className="text-slate-100">
              ARTH.BHUMI ==> Commodity Tokenization | EBL Generation &
              Tokenization of Trade
            </p>
            <p className="text-slate-100">
              ANTELOPE FI ==> Trade Financing Protocal
            </p>

            <p className="text-footer_light">Ant Liquidity Pools ==> Coming up Next, Stay Tuned</p>
            <p className="text-footer_light">
              ARTH Stable Coins + Fiat Liquidity Pools ===> Coming up Next, Stay
              Tuned
            </p>
          </div>
        </div>
      </div>
      {/* Main text goes 

      <h1 className="my-2 font-ibarra text-3xl text-white">
        Transforming Gloabl Trade - Seamless,
        <br />
        Secure, and Sustainable
      </h1>
      <h3 className="mb-5 font-ibarra text-light_text">
        We believe at Smacoteq that we should{" "}
        <span className="text-white">Trade for a Better Future.</span>
        <br />
        Change our ways to make future possible{" "}
        <span className="text-white">For Our COming Generations</span>
      </h3>
      <a href="" className="mt-10 text-sm text-white">
        Read our Whitepaper here
      </a>
      */}
    </div>
  );
}

export default Page1;
