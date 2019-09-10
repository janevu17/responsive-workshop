import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggleSideBar: false
    };
  }

  toggleSideBarFunc = () => {
    this.setState(prevState => {
      console.log(prevState.toggleSideBar);
      return {
        toggleSideBar: !prevState.toggleSideBar
      };
    });
  };

  render() {
    return (
      <header>
        <div>
          <div className="logo">
            <a href="#/services">Start Bootstrap</a>
          </div>
          <button onClick={this.toggleSideBarFunc}>
            {this.state.toggleSideBar ? (
              <p>&#x1F37D;</p>
            ) : (
              <span role="img" aria-label="Menu">
                &#x1F354;
              </span>
            )}
          </button>
          {/* <button onClick={this.toggleSideBarFunc}>MENU &#9776;</button> */}
          <nav className={this.state.toggleSideBar ? "show" : ""}>
            <ul>
              <li>
                <a href="#/services">Home</a>
              </li>
              <li>
                <a href="#/portfolio">About</a>
              </li>
              <li>
                <a href="#/about">Portfolio</a>
              </li>
              <li>
                <a href="#/team">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
