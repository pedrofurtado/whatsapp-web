import React, { Component } from 'react'
import './Heading.css'

class Heading extends Component {
  render() {
    return (
      <div className='Heading row'>
        {this.props.children}
      </div>
    )
  }
}

export default Heading
