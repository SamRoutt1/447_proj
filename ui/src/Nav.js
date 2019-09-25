import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {

  render() {
      return (
          <div>
            <div className="nav">
              <h2>Our big beautiful project</h2>
              <NavLink to="/">
                Home
              </NavLink>
              <NavLink to="/page2">
                Page 2
              </NavLink>
              <NavLink to="/page3">
                Page 3
              </NavLink>
            </div> 
          </div>
      );
  };
}

export default Nav;