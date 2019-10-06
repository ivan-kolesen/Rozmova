import React from 'react';
import { Link } from 'react-router-dom';

import './Auth.css';

class Auth extends React.Component{
  state = {
    user: null
  };

  render(){
    return (
      <div className="auth-container">
        <div className="header">Welcome to Rozmova</div>
        <div className="body">
          <input type="text" />
          <Link id='btnLogin' to='/chat'>CHAT!</Link>
        </div>
        <div className="footer">Ivan Kolesen 2019</div>
      </div>
    );
  }
}

export default Auth;