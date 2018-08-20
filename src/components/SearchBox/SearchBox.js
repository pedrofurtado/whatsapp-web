import React, { Component } from 'react'
import './SearchBox.css'

class SearchBox extends Component {
  render () {
    return (
      <div className='SearchBox row'>
        <div className='SearchBox__form col-md-12'>
          <div className='form-group has-feedback'>
            <input type='text' className='SearchBox__form__input form-control' onChange={(e) => this.props.onSearch(e.target.value)} />
            <span className='SearchBox__form__search_icon glyphicon glyphicon-search form-control-feedback' />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBox
