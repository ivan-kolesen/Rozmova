import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { login } from "../../actions";

import './Auth.css';

class Auth extends React.Component{
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
    //this.props.store.dispatch(setUser(e.target.value));
    this.props.login(e.target.value)
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = dispatch => ({
  login: name => dispatch(login(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);