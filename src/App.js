import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

import SideNavigation from './components/SideNavigation';
import Home from './components/Home';
import FlexBox from './components/FlexBox';
import ModernLanding from './components/ModernLanding';
import Hover from './components/Hover';
import WhiteBoardPrep from './components/WhiteBoardPrep';
import Grid from './components/Grid';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <SideNavigation />
          <Switch>
            {/* Add redirect option "/" to "/home" */}
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
            <Route exact path="/home" component={Home} />
            <Route exact path="/flexbox" component={FlexBox} />
            <Route exact path="/modern-landing-flex-box" component={ModernLanding} />
            <Route exact path="/modern-landing-grid" component={Grid} />
            <Route exact path="/hover" component={Hover} />
            <Route exact path="/whiteboard-prep" component={WhiteBoardPrep} />
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}


