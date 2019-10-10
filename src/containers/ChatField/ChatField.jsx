import React from 'react';
import { connect } from "react-redux";

import Message from '../../components/Message/Message';

import { addMessage } from "../../actions/index";

class ChatField extends React.Component{
  render(){
    console.log(this.props.messages)
    return (
      <>
        {this.props.messages.map( message => {
          const isMine = message.author.id === this.props.user.id;
          return <Message key={message.id} isMine={isMine} message={message}/>;
        })}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    messages: state.messages,
    socket: state.socket
  }
};

const mapDispatchToProps = dispatch => ({
  addMessage: name => dispatch(addMessage(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatField);