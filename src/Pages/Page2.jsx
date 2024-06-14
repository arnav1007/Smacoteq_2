{/*
  
  To make the h3 static at the top place you need to listen to the window object and add
  the tracker to the page so if page is at 0dvh , set h3 property to top-[13dvh]
  once the page is at top-[50dvh] just unset the perpoerty of the h3 and again replace the top-[10] to none
  
  */}

function Page2() {
  return (


    <div className="align-start mb-4 flex h-fit flex-col items-start justify-center pl-12 pt-[13dvh] relative z-10">
  
      <h3 className="mb-5 font-ibarra text-slate-100 text-3xl">
      Embracing Smart Ports for a Sustainable Future
      </h3>

      <ul className="mb-5 font-roboto text-new_light_color flex flex-col gap-3 pt-5 pl-10">
        <li className="text-slate-100 text-xl">
        Smart Ports: The Future of Global Trade
        </li>
        <li>Smart ports are transforming the way we handle trade logistics. </li>
        <li>By integrating advanced technologies such as IoT, blockchain, and automation, smart ports enhance operational efficiency, safety, and environmental sustainability. </li>
        <li>Our collaboration with TradeTrust leverages these innovations to bring significant benefits to global trade.</li>
      </ul>

      <div className="mb-5 font-roboto text-new_light_color flex flex-col gap-3 pt-5 pl-10">
        <p className="text-slate-100 text-xl">
        Key Benefits of Smart Ports
        </p>
        <li><span className="text-slate-100 font-semibold">Enhanced Efficiency: </span>Smart ports use real-time data to optimize the flow of goods, reducing delays and increasing throughput.</li>
        <li><span className="text-slate-100 font-semibold">Cost Reduction:</span> Automation and digital documentation reduce the need for manual processes, lowering operational costs.</li>
        <li> <span className="text-slate-100 font-semibold">Environmental Sustainability:</span> Smart ports implement green technologies and practices that reduce carbon emissions and environmental impact.</li>
      </div>
      <div className="mb-5 font-roboto text-new_light_color flex flex-col gap-3 pt-5 pl-10">
        <p className="text-slate-200 text-xl">
        Global Examples of Smart Ports:        </p>
        <li><span className="text-slate-100 font-semibold">China: </span>Leading with 18 fully automated terminals and 27 more under construction, China is at the forefront of smart port technology. </li>
        <li><span className="text-slate-100 font-semibold">Singapore:</span> The Port of Singapore's Tuas Megaport, set to be the world's largest fully automated port by 2040, showcases extensive use of smart technologies.</li>
        <li> <span className="text-slate-100 font-semibold">Europe:</span> The AspBAN initiative involves over 40 posts in Atlantic region, focusing on innovative and sustainable.</li>
      </div>


      
    </div>
  );
  }

export default Page2;
