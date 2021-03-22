import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import SideNavigation from './components/SideNavigation';

export default function App() {
  return (
    <Router>
      <div className="App">
          <SideNavigation />
      </div>
    </Router>
    
  );
}


