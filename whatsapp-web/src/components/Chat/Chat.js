import React, { Component } from 'react';
import './Chat.css';

class Chat extends Component {
  render() {
    return (
      <div className="Chat row message" id="conversation">
        <div className="row message-previous">
          <div className="col-sm-12 previous">
            <a id="ankitjain28" name="20">
            Show Previous Message!
            </a>
          </div>
        </div>
        <div className="row message-body">
          <div className="col-sm-12 message-main-receiver">
            <div className="receiver">
              <div className="message-text">
                Hyy, Its Awesome..!
              </div>
              <span className="message-time pull-right">
                Sun
              </span>
            </div>
          </div>
        </div>
        {this.props.messages.map(message => (
          <div className="row message-body">
            <div className="col-sm-12 message-main-sender">
              <div className="sender">
                <div className="message-text">
                  {message.text}
                </div>
                <span className="message-time pull-right">
                  {message.sentAt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Chat;
