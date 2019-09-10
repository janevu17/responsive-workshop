import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }

  render() {
    return (
      <header>
        <div>
          <div className="logo">
            <a href="#/services">Start Bootstrap</a>
          </div>
          {/* toggle button goes here */}
          <nav>
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
