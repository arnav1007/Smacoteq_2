{/*
  
  To make the h3 static at the top place you need to listen to the window object and add
  the tracker to the page so if page is at 0dvh , set h3 property to top-[13dvh]
  once the page is at top-[50dvh] just unset the perpoerty of the h3 and again replace the top-[10] to none
  
*/}

function Page2() {
    return (
      <div className="align-start mb-4 flex h-fit flex-col items-start justify-center pl-12 pt-[13dvh] relative z-10">
        <h3 className="mb-5 font-ibarra text-slate-100 text-3xl">
          <p>Smacoteq eBL Services:</p> 
          <p>Transforming Global Trade with Smart Ports</p> 
        </h3>
  
        <ul className="mb-6 font-roboto text-new_light_color flex flex-col  pt-5">
          <li className="text-slate-100 text-3xl">
            Revolutionizing Digital Trade Documentation
          </li>
          <li>Our platform ensures the <span className="text-slate-100 font-semibold">smooth management of electronic Bills of Lading (eBL)</span> </li>
          <li> and other crucial trade documents, available as a dedicated microservice </li>
           <li>  at <a href="https://ebl.smacoteq.com" className="no-underline italic font-semibold">ebl.smacoteq.com</a>.</li>
          <li className="mt-5"> <span className="text-slate-100 font-semibold"> Partnering with TradeTrust from Singapore,</span> we enable smart port functionalities,</li>
          <li>  amplifying sustainability and reducing trade costs through innovative digital solutions.</li>
          
        </ul>
      </div>
    );
  }
  
  export default Page2;
  