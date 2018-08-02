import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Conversation.css';
import Chat from '../Chat/Chat';
import ReplyBar from '../ReplyBar/ReplyBar';
import ConversationHeading from '../ConversationHeading/ConversationHeading';
import * as MessageActions from '../../redux/actions/message';

class Conversation extends Component {
  state = {
    messages: []
  }

  static contextTypes = {
    store: PropTypes.object
  }

  componentDidMount() {
    this.context.store.subscribe(() => {
      this.setState({
        messages: this.context.store.getState().messages
      })
    });
  }

  generateRandomReceiverReply() {
    const receiverReply = {
      text: 'Really? Tell me more about that ...',
      sentAt: '01/05/2018 10:30',
      origin: 'receiver'
    };

    this.context.store.dispatch(MessageActions.create(receiverReply));
  }

  componentDidUpdate() {
    this.scrollBottomInChat();
  }

  scrollBottomInChat() {
    const chat = ReactDOM.findDOMNode(this.refs.chatComponent);
    chat.scrollTop = chat.scrollHeight - chat.clientHeight;
  }

  handleReply = (reply) => {
    this.context.store.dispatch(MessageActions.create(reply));

    setTimeout(() => {
      this.generateRandomReceiverReply();
    }, 2000);
  }

  render() {
    return (
      <div className='Conversation'>
        <ConversationHeading name='Pedro Furtado' />
        <Chat ref='chatComponent' messages={this.state.messages} />
        <ReplyBar onReply={this.handleReply} />
      </div>
    );
  }
}

export default Conversation;
