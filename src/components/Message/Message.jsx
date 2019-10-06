import React from 'react';

import './Message.css';

class Message extends React.Component{
  render(){
    return (
      <div className={`message-container ${this.props.isMine ? "my-message" : ""}`}>
        <div className="message">
          <div className="message-author">Vano</div>
          <div className="message-value">Hello friends</div>
        </div>
      </div>
    );
  }
}

export default Message;