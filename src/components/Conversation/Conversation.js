import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Conversation.css';
import Chat from '../Chat/Chat';
import ReplyBar from '../ReplyBar/ReplyBar';
import ConversationHeading from '../ConversationHeading/ConversationHeading';

class Conversation extends Component {
  state = {
    messages: [
      {
        text: 'Hey! Whats up?',
        sentAt: '10/10/1990 13:33',
        origin: 'receiver'
      }
    ]
  }

  generateRandomReceiverReply() {
    const receiverReply = {
      text: 'Really? Tell me more about that ...',
      sentAt: '01/05/2018 10:30',
      origin: 'receiver'
    };

    this.setState({ messages: [...this.state.messages, receiverReply] });
  }

  componentDidUpdate() {
    this.scrollBottomInChat();
  }

  scrollBottomInChat() {
    const chat = ReactDOM.findDOMNode(this.refs.chatComponent);
    chat.scrollTop = chat.scrollHeight - chat.clientHeight;
  }

  handleReply = (reply) => {
    this.setState({ messages: [...this.state.messages, reply] });

    setTimeout(() => {
      this.generateRandomReceiverReply();
    }, 2000);
  }

  render() {
    return (
      <div className='Conversation col-md-8'>
        <ConversationHeading />
        <Chat ref='chatComponent' messages={this.state.messages} />
        <ReplyBar onReply={this.handleReply} />
      </div>
    );
  }
}

export default Conversation;
