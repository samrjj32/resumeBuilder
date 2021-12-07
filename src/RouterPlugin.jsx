import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  withRouter,
  Redirect,
} from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateResume from "./Screens/CreateResume";
import ViewResume from "./Screens/ViewResume";

function RouterPlugin() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<CreateResume />} />
        {/* <Route path="/edit/:id" exact component={EditResume} /> */}
         <Route path="/resume/:id" exact element={<ViewResume/>} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default RouterPlugin;
