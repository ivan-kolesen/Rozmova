import React from 'react';
import { connect } from 'react-redux'

import {login, addMessage, connectWS} from "../../actions";

class FormLogin extends React.Component{
  state = {
    name: ""
  };

  render(){
    return (
      <>
        <label>What is your name?</label>
        <input type="text" onChange={this.handleInputChange.bind(this)}/>
        <button className="btnLogin" onClick={this.handleBtnLoginClick.bind(this)}>CHAT</button>
      </>
    );
  }

  handleInputChange(e){
    this.setState({name: e.target.value});
  }

  handleBtnLoginClick(){
    //this.socket = new WebSocket("wss://rozmova.appspot.com");
    const socket = new WebSocket("ws://localhost:8080");
    this.props.connectWS(socket);

    socket.onopen = () => console.log("Соединение установлено.");

    socket.onclose = event => {
      console.log( event.wasClean ? "Соединение закрыто чисто" : "Обрыв соединения");
      console.log(`Код: ${event.code}, причина: ${event.reason}`);
    };

    socket.onerror = error => console.log("Ошибка " + error.message, error);

    socket.onmessage = event => {
      console.log(event.data);
      const message = JSON.parse(event.data);

      switch(message.type){
        case "auth":
          this.props.login(message.value.id, this.state.name);
          break;
        case "message":
          console.log(message);
          this.props.addMessage(message.value);
          break;
        default:
          break;
      }
    };
  }
}

const mapDispatchToProps = dispatch => ({
  login: (id, name) => dispatch(login(id, name)),
  addMessage: message => dispatch(addMessage(message)),
  connectWS: socket => dispatch(connectWS(socket))
});

export default connect(
  null,
  mapDispatchToProps
)(FormLogin);