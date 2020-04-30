import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.style = { color: "#7a7aff" };
  }
  render() {
    let myActiveStyle = this.style;
    return (
      <header>
        <span className="logo-wrapper">
          <span className="logo-wrapper-child">
            <NavLink to="/"></NavLink>
          </span>
        </span>
        <nav>
          <a href="#" id="menu-icon"></a>
          <ul className="navbar-elements">
            <li className="navbar-element">
              <NavLink activeStyle={myActiveStyle} exact to="/">
                Home
              </NavLink>
            </li>
            <li className="navbar-element">
              <NavLink activeStyle={myActiveStyle} to="/statecrud">
                State CRUD
              </NavLink>
            </li>
            <li className="navbar-element">
              <NavLink activeStyle={myActiveStyle} to="/reduxcourses">
                Redux Courses
              </NavLink>
            </li>
            <li className="navbar-element">
              <NavLink activeStyle={myActiveStyle} to="/courses">
                Courses
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
