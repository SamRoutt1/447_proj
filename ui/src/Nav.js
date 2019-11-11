import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {

  render() {
      return (
          <div>
            <div className="myNav">
              <h2>Our big beautiful project</h2>
              <NavLink to="/">
                Home
              </NavLink>
              <NavLink to="/order">
                Order
              </NavLink>
              <NavLink to="/page3">
                Page 3
              </NavLink>
              <NavLink to="/login">
                Logout
              </NavLink>
            </div> 
          </div>
      );
  };
}

export default Nav;