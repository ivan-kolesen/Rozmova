import React from 'react';
import { Link } from 'react-router-dom';

class Auth extends React.Component{
  state = {
    user: null
  };

  render(){
    return (
      <div>
        <div>Your name</div>
        <input type="text" />
        <Link to='/chat'>CHAT!</Link>
      </div>
    );
  }
}

export default Auth;