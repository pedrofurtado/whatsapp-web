import React, { Component } from 'react';
import './ReplyBar.css';

class ReplyBar extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <div className='ReplyBar row'>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className='ReplyBar__emojis col-sm-1 col-xs-1'>
            <i className='fa fa-smile-o'></i>
          </div>
          <div className='ReplyBar__form col-sm-9 col-xs-9'>
            <textarea className='ReplyBar__form__input form-control' onChange={(e) => this.handleChange(e)} value={this.state.text}></textarea>
          </div>
          <div className='ReplyBar__recording col-sm-1 col-xs-1'>
            <i className='fa fa-microphone' aria-hidden='true'></i>
          </div>
          <div className='ReplyBar__send col-sm-1 col-xs-1'>
            <button><i className='fa fa-send' aria-hidden='true'></i></button>
          </div>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.text.length) {
      return;
    }

    if(this.props.hasOwnProperty('onReply') && typeof(this.props.onReply) === 'function') {
      this.props.onReply({
        text: this.state.text,
        sentAt: Date.now(),
        origin: 'sender'
      });
    }

    this.setState({ text: '' });
  }
}

export default ReplyBar;
