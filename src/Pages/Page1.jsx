function Page1() {
  return (
    <div className="relative z-10 flex h-full flex-col items-start justify-center pl-12 pt-24" style={{ fontFamily: 'Ibbara Real Nova ' }}>
      <div className="flex h-full w-full flex-col items-start justify-center">
        <div className="h-fit w-fit text-white" style={{ fontSize: '38px'}}>
          <h1>Building Sustainable and Scalable</h1>
          <h1>Decentralized Technologies</h1>
          <h1>For The Industry 4.0 Supply Chains</h1>
        </div>
        <div className="flex h-4/6 w-full pt-1">
          <div className="flex h-full w-1/12 justify-center pt-8">
            <img src="/vertical_line.png" alt="" className="h-3/6" />
          </div>
          <div className="flex h-full w-11/12 flex-col gap-3" style={{ fontSize: '20px' }}>
            <div className="mt-4 flex h-[2vh] w-7/12 items-center justify-center">
              <img src="/hirzontalline.png" alt="" className="h-[1px]" />
            </div>

            <p className="text-slate-100 font-semibold">
              eBL Tokenization ==> Built on top of TradeTrust to create & trade shipment related docs
            </p>
            <p className="text-slate-100 font-semibold">
              ARTH.BHUMI ==> Commodity Tokenization | EBL Generation & Tokenization of Trade
            </p>
            <p className="text-slate-100 font-semibold">
              ANTELOPE FI ==> Trade Financing Protocol
            </p>
            <p className="text-new_light_color">
              Ant Liquidity Pools ==> Coming up Next, Stay Tuned!
            </p>
            <p className="text-new_light_color">
              ARTH Stable Coins + Fiat Liquidity Pools ==> Coming up Next, Stay Tuned!
            </p>
          </div>
        </div>
      </div>
      {/* Main text goes here */}
    </div>
  );
}

export default Page1;
