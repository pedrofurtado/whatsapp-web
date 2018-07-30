import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  render() {
    return (
      <div className='SearchBox row'>
        <div className='SearchBox__form col-sm-12'>
          <div className='form-group has-feedback'>
            <input type='text' className='form-control' />
            <span className='glyphicon glyphicon-search form-control-feedback'></span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;
