import React, { Component } from 'react';
import background from './background.png';
import './Chat.css';
import Message from './components/Message/Message';

class Chat extends Component {
  render() {
    return (
      <div className='Chat row' style={{ backgroundImage: `url(${background})` }}>
        {this.props.messages.map(message => (
          <Message {...message} key={message.sentAt} />
        ))}
      </div>
    );
  }
}

export default Chat;
