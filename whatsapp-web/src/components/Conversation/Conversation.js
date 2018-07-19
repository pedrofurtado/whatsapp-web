import React, { Component } from 'react';
import './Conversation.css';
import Chat from '../Chat/Chat';
import ReplyBar from '../ReplyBar/ReplyBar';
import Heading from '../Heading/Heading';

class Conversation extends Component {
  state = { 
    messages: []
  }

  handleReply = (reply) => {
    this.setState(prevState => ({
      messages: prevState.messages.concat(reply),
    }));
  }

  render() {
    return (
      <div className="col-sm-8 conversation">
        <Heading/>  
        <Chat messages={this.state.messages} />
        <ReplyBar onReply={this.handleReply} />
      </div>
    );
  }
}

export default Conversation;
