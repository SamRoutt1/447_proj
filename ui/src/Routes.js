import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Nav from './Nav';
import Home from './components/Home';
import Page3 from './components/page3';
import Page2 from './components/page2';
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
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route exact path="/page2" component={Page2} />
              <Route exact path="/page3" component={Page3} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
};

export default Routes;