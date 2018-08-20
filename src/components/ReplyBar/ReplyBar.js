import React, { Component } from 'react'
import './ReplyBar.css'

class ReplyBar extends Component {
  state = { text: '' }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    if (!this.state.text.length) { return }

    if(this.props.hasOwnProperty('onReply') && typeof(this.props.onReply) === 'function') {
      this.props.onReply({
        text: this.state.text,
        uuid: `uuid-${(new Date()).toISOString()}`,
        sentAt: '07/12/2011 15:55',
        origin: 'sender'
      })
    }

    this.setState({ text: '' })
  }

  render() {
    return (
      <div className='ReplyBar row'>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className='ReplyBar__emojis col-md-1 col-sm-1 col-xs-2'>
            <i className='fa fa-smile-o'></i>
          </div>
          <div className='ReplyBar__form col-md-9 col-sm-9 col-xs-6'>
            <input className='ReplyBar__form__input form-control' onChange={(e) => this.handleChange(e)} value={this.state.text} />
          </div>
          <div className='ReplyBar__recording col-md-1 col-sm-1 col-xs-1'>
            <i className='fa fa-microphone'></i>
          </div>
          <div className='ReplyBar__send col-md-1 col-sm-1 col-xs-2'>
            <i className='fa fa-send'></i>
          </div>
        </form>
      </div>
    )
  }
}

export default ReplyBar
