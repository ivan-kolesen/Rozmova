import React from 'react';
import { connect } from "react-redux";
import Link from 'react-router-dom';

import Message from '../Message/Message';

import { addMessage } from "../../actions";

import './Chat.css';

class Chat extends React.Component{
  constructor(props){
    super(props);
    this.socket = undefined;
  }

  state = {
    message: ""
  };

  componentDidMount(){
    //this.socket = new WebSocket("wss://rozmova.appspot.com");
    this.socket = new WebSocket("ws://localhost:8080");

    this.socket.onopen = () => console.log("Соединение установлено.");

    this.socket.onclose = event => {
      console.log( event.wasClean ? "Соединение закрыто чисто" : "Обрыв соединения");
      console.log(`Код: ${event.code}, причина: ${event.reason}`);
    };

    this.socket.onerror = error => console.log("Ошибка " + error.message, error);

    this.socket.onmessage = event => {
      const message = JSON.parse(event.data);
      console.log(message);
      this.props.addMessage(message);
    };
  }

  render(){
    console.log(this.props);
    return (
      <div className="chat-container">
        <div className="chat-field-container">
          <div className="chat-field">
            {this.props.messages.map( message => {
              const isMine = message.author === this.props.user.name;
              return <Message key={message.id} isMine={isMine} message={message}/>;
            })}
          </div>
        </div>
        <div className="chat-new-message-container">
          <input id="inputMessage" type="text" onChange={this.handleMessageTyping.bind(this)}/>
          <button id="btnSendMessage" onClick={this.sendMessage.bind(this)}>></button>
        </div>
      </div>
    );
  }

  sendMessage(){
    if(this.state.message){
      const message = {
        author: this.props.user.name,
        value: this.state.message
      };

      console.log(this.state.message);

      this.socket.send(JSON.stringify(message));
      this.clearMessageInput();
    }
  }

  handleMessageTyping(e){
    this.setState({ message: e.target.value });
  };

  clearMessageInput(){
    document.getElementById("inputMessage").value = "";
    this.setState({ message: "" });
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    messages: state.messages
  }
};

const mapDispatchToProps = dispatch => ({
  addMessage: name => dispatch(addMessage(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);