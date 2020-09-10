import React from 'react';
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import PrivateRoute from './components/PrivateRoute';

import LoginPage from './pages/Auth/Login';
import MasterPage from './pages/Master';
import FourOFourPage from './pages/FourOFour/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <PrivateRoute path="/instructor">
              <MasterPage />
            </PrivateRoute>
            <Route path="*" component={FourOFourPage} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
