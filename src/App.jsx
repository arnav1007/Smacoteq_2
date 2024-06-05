import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import "./App.css";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import AppLayout from "./Ui/AppLayout";
import PageLayout from "./Ui/PageLayout";

function App() {


  return (
 

    <AppLayout>
      <PageLayout number={"100"}>
        <Page1 />
        <Page2 />
      </PageLayout>

      {/*
       */}
    </AppLayout>
  );
}

export default App;
