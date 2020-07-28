// Importing dependencies for React and Profile and Home and Bookmarks Components
import React from 'react';
import './App.css';
import Home from './Components/Home';
import Profile1 from './Components/Profile1';
import Profile2 from './Components/Profile2';
import Profile3 from './Components/Profile3';
import Bookmarks from './Components/Bookmarks';
import { LinkContainer } from "react-router-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* Starting the Router to switch between Component Pages */}
      <Router>
        {/* <Home /> */}

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/Profile1">
            <Profile1/>
          </Route>

          <Route exact path="/Profile2">
            <Profile2/>
          </Route>

          <Route exact path="/Profile3">
            <Profile3/>
          </Route>

          <Route exact path="/Bookmarks">
            <Bookmarks/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;


// React router source: http://tszekely.github.io/react-learning-module/step-06 