import React from 'react';

import './Message.css';

class Message extends React.Component{
  render(){
    return (
      <div className={`message-container ${this.props.isMine ? "my-message" : ""}`}>
        <div className="message">
          <div className="message-author">{this.props.message.author.name}</div>
          <div className="message-text">{this.props.message.value}</div>
        </div>
      </div>
    );
  }
}

export default Message;