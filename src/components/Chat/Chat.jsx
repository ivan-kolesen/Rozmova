import React from 'react';
import { connect } from "react-redux";
import ScrollToBottom from 'react-scroll-to-bottom';

import ChatField from '../../containers/ChatField/ChatField';

import { addMessage, clearMessages, logout, disconnectWS } from "../../actions";

import './Chat.css';

class Chat extends React.Component{
  constructor(props){
    super(props);
  }

  state = {
    message: ""
  };

  componentDidMount(){}

  componentWillUnmount(){}

  render(){
    return (
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-header-name">{this.props.user.name}</div>
          <button className="chat-header-btn-exit" onClick={this.handleBtnExit.bind(this)}>X</button>
        </div>
        <div className="chat-field-container">
          <ScrollToBottom className="chat-field">
            <ChatField />
          </ScrollToBottom>
        </div>
        <div className="chat-new-message-container">
          <input
            id="inputMessage"
            type="text"
            onChange={this.handleMessageTyping.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <button id="btnSendMessage" onClick={this.sendMessage.bind(this)}>></button>
        </div>
      </div>
    );
  }

  handleBtnExit(){
    this.props.websocket.close();
    this.props.disconnectWS();
    this.props.clearMessages();
    this.props.logout();
  }

  handleKeyPress(e){
    switch(e.key) {
      case 'Enter':
        this.sendMessage();
        break;
      default:
        return;
    }
  }

  sendMessage(){
    if(this.state.message){
      const message = {
        type: "message",
        author: {
          id: this.props.user.id,
          name: this.props.user.name
        },
        value: this.state.message
      };

      this.props.websocket.send(JSON.stringify(message));
      this.clearMessageInput();
    }
  }

  handleMessageTyping(e){
    this.setState({ message: e.target.value });

  };

  clearMessageInput(){
    const inputMessage = document.getElementById("inputMessage");
    inputMessage.value = "";
    inputMessage.focus();
    this.setState({ message: "" });
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    messages: state.messages,
    websocket: state.websocket
  }
};

const mapDispatchToProps = dispatch => ({
  addMessage: name => dispatch(addMessage(name)),
  clearMessages: () => dispatch(clearMessages()),
  logout: () => dispatch(logout()),
  disconnectWS: () => dispatch(disconnectWS())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);