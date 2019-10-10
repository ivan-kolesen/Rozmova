import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Auth from './components/Auth/Auth';
import Chat from './components/Chat/Chat';

import './App.css';
import {connect} from "react-redux";

class App extends React.Component{
  render() {
    return (
      <div className="background">
        <div className="container">
          <Redirect to={this.props.user.isLoggedIn ? "/chat" : "/"}/>
          <Switch>
            <Route exact path="/" component={Auth}/>
            <Route exact path="/chat" component={Chat}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

export default connect(
  mapStateToProps
)(App);
