import React, { Component } from 'react';
import './Chat.css';

class Chat extends Component {
  render() {
    return (
      <div className="Chat row">
        <div className="row Chat__previous">
          <div className="col-sm-12 Chat--previous">
            <a id="ankitjain28" name="20">
            Show Previous Message!
            </a>
          </div>
        </div>
        <div className="row Chat__body">
          <div className="col-sm-12 Chat__main-receiver">
            <div className="Chat__receiver">
              <div className="Chat__text">
                Hyy, Its Awesome..!
              </div>
              <span className="Chat__time pull-right">
                Sun
              </span>
            </div>
          </div>
        </div>
        {this.props.messages.map(message => (
          <div key={message.sentAt} className="row Chat__body">
            <div className="col-sm-12 Chat__main-sender">
              <div className="Chat__sender">
                <div className="Chat__text">
                  {message.text}
                </div>
                <span className="Chat__time pull-right">
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
