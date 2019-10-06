import React from 'react';
import { Switch, Route } from "react-router-dom";

import Auth from './components/Auth/Auth';
import Chat from './components/Chat/Chat';

import './App.css';

function App() {
  return (
    <div className="background">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Auth}/>
          <Route exact path="/chat" component={Chat}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
