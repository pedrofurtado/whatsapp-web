import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './Conversation.css'
import Chat from '../Chat/Chat'
import ReplyBar from '../ReplyBar/ReplyBar'
import ConversationHeading from '../ConversationHeading/ConversationHeading'
import { create as createMessage } from '../../redux/ducks/message'

class Conversation extends Component {
  componentDidUpdate () {
    this.scrollChatToBottom()
  }

  scrollChatToBottom () {
    const chat = ReactDOM.findDOMNode(this.refs.chatComponent)
    chat.scrollTop = chat.scrollHeight - chat.clientHeight
  }

  render () {
    return (
      <div className='Conversation'>
        <ConversationHeading name='Pedro Furtado' />
        <Chat ref='chatComponent' messages={this.props.messages} />
        <ReplyBar onReply={this.props.createMessage} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages
})

const mapDispatchToProps = dispatch => bindActionCreators({
  createMessage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Conversation)
