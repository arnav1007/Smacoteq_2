function Page3() {
  return (
    <div className="text-ibarra h-[80dvh] w-full pl-8 z-10 relative">
      <div className="flex h-full w-full flex-col items-start justify-center">
        <div className="h-fit w-fit font-ibarra text-slate-100">
          <h1 className="text-3xl">ARTH.BHUMI</h1>
          <h3 className="text-2xl">
            Bring Fluidity to your Trades with the help of Arth
          </h3>
          <h4 className="text-2xl">How?</h4>
        </div>
        <div className="flex h-4/6 w-full pt-1">
          <div className="flex h-full w-1/12 justify-center align-middle">
            <img src="/vertical_line.png" alt="" className="h-3/6" />
          </div>
          <div className="flex h-full w-11/12 flex-col gap-3 font-roboto text-light_text">
            <p>Onboard Swiflty with E-mail & Business Details</p>
            <p>
              Create <span className="text-slate-100">Decentralised ID</span>{" "}
              DID & Wallets
            </p>
            <p>
              Connect with validated Buyers from all orners of the world, accept
              proposals
            </p>
            <p>
              <span className="text-slate-100">Buyer Dashboard: </span>Browse
              the marketplace, create and manage buy requests
            </p>
            <p>
              {" "}
              <span className="text-slate-100">Supplier Dashboard: </span>
              Tokenize Commodities & manage listingd with ease
            </p>
            <p>
              {" "}
              <span className="text-slate-100">Logistic Dashboard: </span>Manage
              trades, Generate electronic Bill of Lading (eBL)
            </p>

            <p>
              Experience seamless digitization, verification & transfer of
              documentations with{" "}
              <span className="text-slate-100">
                {" "}
                Secure Electronic Bill of Lading(eBL) for your trades{" "}
              </span>{" "}
              and uncomplicated KYC/KYB procedures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
