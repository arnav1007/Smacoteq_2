import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import "./App.css";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import AppLayout from "./Ui/AppLayout";
import PageLayout from "./Ui/PageLayout";

function Pages() {
  return (
    <PageLayout number={"100"}>
      <Page1 />
      <Page2 />
    </PageLayout>
  );
}

function App() {

  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/ARTH.BHIM" />} />
          <Route
            path="/ARTH.BHIM"
            element={
              <PageLayout>
                <Page1 />
                <Page2/>
              </PageLayout>
            }
          />
          <Route path="/ARTH.BHIM/WhatWeDo" element={<Page3 />}>
            
          </Route>
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
