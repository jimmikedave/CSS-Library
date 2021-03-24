import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import SideNavigation from './components/SideNavigation';
import Home from './components/Home';
import FlexDirection from './components/FlexDirection';
import ModernLanding from './components/ModernLanding';
import Hover from './components/Hover';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <SideNavigation />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/flex-direction" component={FlexDirection} />
            <Route exact path="/modern-landing" component={ModernLanding} />
            <Route exact path="/hover" component={Hover} />
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}


