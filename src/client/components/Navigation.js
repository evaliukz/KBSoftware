import React, { Component } from "react";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navDivs: [],
    };
  }

  componentDidMount() {
    const pageList = [
      "Home",
      "Software Development Services",
      "IT Talent Solutions",
      "Testimonials",
      "Contact",
    ];

    let navbarDivs = pageList.map((page, i) => {
      if (this.props.active === page) {
        return (
          <a key={i} href={"/" + page.replaceAll(" ", "_")}>
            {page.charAt(0).toUpperCase() + page.substring(1, page.length)}
          </a>
        );
      } else {
        return (
          <a key={i} href={"/" + page.replaceAll(" ", "_")}>
            {page.charAt(0).toUpperCase() + page.substring(1, page.length)}
          </a>
        );
      }
    });

    this.setState({
      navDivs: navbarDivs,
    });
  }

  render() {
    return (
      <div>
        <nav>
          <div>{this.state.navDivs}</div>
        </nav>
      </div>
    );
  }
}
