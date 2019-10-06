import React from 'react';
import { Link } from 'react-router-dom';

import './Auth.css';

class Auth extends React.Component{
  state = {
    user: undefined
  };

  render(){
    return (
      <div className="auth-container">
        <div className="header">Rozmova</div>
        <div className="body">
          <label>What is your name?</label>
          <input type="text" onChange={this.handleInputChange.bind(this)}/>
          <Link className="btnLogin" to='/chat'>CHAT</Link>
        </div>
        <div className="footer">Ivan Kolesen 2019</div>
      </div>
    );
  }

  handleInputChange(e){
    this.setState({user: e.target.value});
  }
}

export default Auth;