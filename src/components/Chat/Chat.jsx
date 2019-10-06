import React from 'react';
import Link from 'react-router-dom';

import Message from '../Message/Message'

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

    this.socket.onmessage = event => console.log(JSON.parse(event.data));
  }

  render(){
    return (
      <div className="chat-container">
        <div className="chat-field-container">
          <div className="chat-field">
            <Message isMine/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
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
        author: "vano",
        value: this.state.message
      };

      console.log(this.state.message);

      this.socket.send(JSON.stringify(message));
      this.clearMessageInput();
    }
  }

  handleMessageTyping(e){
    this.setState({message: e.target.value});
  };

  clearMessageInput(){
    document.getElementById("inputMessage").value = "";
    this.setState({message: ""});
  }
}

export default Chat;