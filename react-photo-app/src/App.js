import React from 'react';
import './App.css';
import Home from './Components/Home';
import Profile1 from './Components/Profile1';
import Profile2 from './Components/Profile2';
import Profile3 from './Components/Profile3';
import Bookmarks from './Components/Bookmarks';
import { LinkContainer } from "react-router-bootstrap";
import 

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Profile1 />
      <Profile2 />
      <Profile3 /> */}
    </div>
  );
}

export default App;


// React router source: http://tszekely.github.io/react-learning-module/step-06 