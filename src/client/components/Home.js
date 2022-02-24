import React, { Component } from "react";
import Navigation from "./Navigation";

export class Home extends Component {
  render() {
    return (
      <div>
        <p> KB Software </p>

        <Navigation />
        <p>We are an outsourcing software development company</p>

        <p> Advantages </p>
        <p> Predictable performance and quality</p>
      </div>
    );
  }
}

export default Home;
