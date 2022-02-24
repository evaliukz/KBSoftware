import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import SoftwareDevelopmentServices from "./SoftwareDevelopmentServices";
import ITTalentSolutions from "./ITTalentSolutions";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route
              path='/Software_Development_Services'
              element={<SoftwareDevelopmentServices />}
            />
            <Route
              path='/IT_Talent_Solutions'
              element={<ITTalentSolutions />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
