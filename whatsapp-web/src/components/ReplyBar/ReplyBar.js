import React, { Component } from 'react';
import './ReplyBar.css';

class ReplyBar extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <div className="ReplyBar row">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="col-sm-1 col-xs-1 ReplyBar__emojis">
            <i className="fa fa-smile-o"></i>
          </div>
          <div className="col-sm-9 col-xs-9 ReplyBar__main">
            <input id="comment" className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.text} />
          </div>
          <div className="col-sm-1 col-xs-1 ReplyBar__recording">
            <i className="fa fa-microphone" aria-hidden="true"></i>
          </div>
          <div className="col-sm-1 col-xs-1 ReplyBar__send">
            <button><i className="fa fa-send" aria-hidden="true"></i></button>
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
        sentAt: Date.now()
      });
    }

    this.setState({ text: '' });
  }
}

export default ReplyBar;
