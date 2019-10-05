import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Auth from './components/Auth/Auth';
import Chat from './components/Chat/Chat';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth}/>
        <Route exact path="/chat" component={Chat}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
