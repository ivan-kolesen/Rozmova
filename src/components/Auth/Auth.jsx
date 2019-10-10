import React from 'react';

import FormLogin from '../FormLogin/FormLogin';

import './Auth.css';


class Auth extends React.Component{
  render(){
    return (
      <div className="auth-container">
        <div className="header">Rozmova</div>
        <div className="body">
          <FormLogin />
        </div>
        <div className="footer">Ivan Kolesen 2019</div>
      </div>
    );
  }
}

export default Auth;