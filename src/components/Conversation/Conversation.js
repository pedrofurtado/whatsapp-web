import React, { Component } from 'react';
import './Conversation.css';
import Chat from '../Chat/Chat';
import ReplyBar from '../ReplyBar/ReplyBar';
import ConversationHeading from '../ConversationHeading/ConversationHeading';

class Conversation extends Component {
  state = {
    messages: [
      {
        text: 'e ai vei, de boas?',
        sentAt: '10/10/1990 13:33',
        origin: 'receiver'
      }
    ]
  }

  handleReply = (reply) => {
    this.setState({ messages: [...this.state.messages, reply] });
  }

  render() {
    return (
      <div className='Conversation col-md-8'>
        <ConversationHeading />
        <Chat messages={this.state.messages} />
        <ReplyBar onReply={this.handleReply} />
      </div>
    );
  }
}

export default Conversation;
