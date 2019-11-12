import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {

  render() {
      return (
          <div>
            <div className="myNav">
              <h1>Food Queue</h1>
              {/*<NavLink to="/">
                Home
              </NavLink>
              <NavLink to="/order">
                Order
              </NavLink>
              <NavLink to="/orders">
                Orders
              </NavLink>*/}
              <div />
              <div />
              <div />
              <NavLink to="/">
                Logout
              </NavLink>
            </div> 
          </div>
      );
  };
}

export default Nav;