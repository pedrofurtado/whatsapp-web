import React, { Component } from 'react'
import './Message.css'

class Message extends Component {
  render() {
    return (
      <div className={`Message Message--${this.props.origin} row`}>
        <div className={`Message__wrapper col-sm-12`}>
          <div className='Message__wrapper__body'>
            <div className='Message__wrapper__body__text'>{this.props.text}</div>
            <div className='Message__wrapper__body__sentAt'>{this.props.sentAt}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Message
