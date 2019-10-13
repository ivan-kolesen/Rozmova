import React from 'react';

import './Notification.css';

class Notification extends React.Component{
  render(){
    const notificationText = `${this.props.message.name} joined the chat`;
    return (
      <div className="notification">
        {notificationText}
      </div>
    );
  }
}

export default Notification;