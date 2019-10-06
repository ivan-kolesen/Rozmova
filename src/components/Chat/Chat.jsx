import React from 'react';
import Link from 'react-router-dom';

import './Chat.css';

class Chat extends React.Component{
  constructor(props){
    super(props);
    this.socket = undefined;
  }

  componentDidMount(){
    this.socket = new WebSocket("wss://rozmova.appspot.com");

    this.socket.onopen = () => console.log("Соединение установлено.");

    this.socket.onclose = event => {
      console.log( event.wasClean ? "Соединение закрыто чисто" : "Обрыв соединения");
      console.log(`Код: ${event.code}, причина: ${event.reason}`);
    };

    this.socket.onerror = error => console.log("Ошибка " + error.message, error);
  }

  render(){
    return (
      <div className="chat-container">
        <div className="chat-field-container">
          <div className="chat-field"></div>
        </div>
        <div className="chat-message-container">
          <input type="text" />
          <button>></button>
        </div>
      </div>
    );
  }
}

export default Chat;