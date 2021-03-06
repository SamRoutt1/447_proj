import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Nav from './Nav';
import Home from './components/Home';
import Orders from './components/Orders';
import Order from './components/Order';
//import './sass/routes.scss';

class Routes extends Component {

  render() {
    return(
      <div>
        <div className="rotues">
          <div className="header">
            <Nav />
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              {/*<Route exact path="/" component={Home} />*/}
              <Route exact path="/order" component={Order} />
              <Route exact path="/orders" component={Orders} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
};

export default Routes;