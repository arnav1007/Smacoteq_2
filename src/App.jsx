import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page15 from "./Pages/Page15";
import PageX from "./Pages/PageX";
import AppLayout from "./Ui/AppLayout";
import PageLayout from "./Ui/PageLayout";
import { useEffect, useState } from "react";
import Page3 from "./Pages/Page3";
import Page_Vision from "./Pages/Page_Vision";
import Page_AboutUs from "./Pages/Page_AboutUs";

const routeMapping = {
  "/ARTH.BHUMI": 1,
  "/ARTH.BHUMI/WhatWeDo": 2,
  // Add other routes and their corresponding numbers here
};

function App() {
  const [currentRouteNumber, setCurrentRouteNumber] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const number = routeMapping[location.pathname] || null;
    setCurrentRouteNumber((num) => (num = number));
  }, [location]);

  return (
    <AppLayout currectRouteNumber={currentRouteNumber}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/ARTH.BHUMI" />} />
        <Route
          path="/ARTH.BHUMI"
          element={
            <PageLayout>
              <Page1 />
              <Page15 />
              <Page2 />
              <Page3 />
            </PageLayout>
          }
        />
        <Route
          path="/Smacoteq/Vision"
          element={
            <PageLayout>
              <Page_Vision />
            </PageLayout>
          }
        />
        <Route
          path="/Smacoteq/AboutUs"
          element={
            <PageLayout>
              <Page_AboutUs />
            </PageLayout>
          }
        />
        <Route path="/ARTH.BHUMI/WhatWeDo" element={<PageX />}></Route>
      </Routes>
    </AppLayout>
  );
}

export default App;
