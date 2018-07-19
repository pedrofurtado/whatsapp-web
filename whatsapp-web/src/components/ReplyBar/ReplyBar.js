import React, { Component } from 'react';
import './ReplyBar.css';

class ReplyBar extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <div className="ReplyBar row reply">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="col-sm-1 col-xs-1 reply-emojis">
            <i className="fa fa-smile-o"></i>
          </div>
          <div className="col-sm-9 col-xs-9 reply-main">
            <input id="comment" className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.text} />
          </div>
          <div className="col-sm-1 col-xs-1 reply-recording">
            <i className="fa fa-microphone" aria-hidden="true"></i>
          </div>
          <div className="col-sm-1 col-xs-1 reply-send">
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

    this.props.onReply({
      text: this.state.text,
      sentAt: Date.now()
    });

    this.setState({ text: '' });
  }
}

export default ReplyBar;
