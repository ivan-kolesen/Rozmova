import React from 'react';
import Link from 'react-router-dom';

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
      <div>
        Chat
      </div>
    );
  }
}

export default Chat;