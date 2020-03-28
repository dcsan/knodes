import React from 'react';
import { Provider } from 'react-redux'
import { store } from './DataFlow/store'

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


import NavBar from './components/layout/NavBar'

import Home from './pages/Home/Home'
import Settings from './pages/Settings/Settings'
import Swipey from './pages/Swipey/Swipey'
import Smooth from './pages/Smooth/Smooth'
import Gex from './components/Gex'
// import {FrameList} from './pages/FrameList/FrameList'

// import MessageList from './pages/ChunkyChat/MessageList'

const App: React.FC = () => {
  return (
    <div className="App">

      <Provider store={ store }>
      <Router>
        <NavBar />
        <div className='main-content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/smooth">
              <Smooth />
            </Route>
            <Route path="/gex">
              <Gex />
            </Route>

            <Route path="/swipeychat">
              <Swipey/>
            </Route>

            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
