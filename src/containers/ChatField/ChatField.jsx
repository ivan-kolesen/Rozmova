import React from 'react';
import { connect } from "react-redux";
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../../components/Message/Message';
import Notification from '../../components/Notification/Notification';

import { addMessage } from "../../actions/index";

class ChatField extends React.Component{
  render(){
    return (
      <>
        {this.props.messages.map( message => {
          console.log(message)
          if(message.type === "message"){
            const isMine = message.author.id === this.props.user.id;
            return <Message key={message.id} isMine={isMine} message={message}/>;
          } else if(message.type === "newUser"){
            return <Notification key={message.id} message={message}/>
          }
        })}
      </>
    );
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
  addMessage: name => dispatch(addMessage(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatField);