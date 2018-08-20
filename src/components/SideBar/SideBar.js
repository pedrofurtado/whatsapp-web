import React, { Component } from 'react'
import './SideBar.css'
import ConversationsArchive from '../ConversationsArchive/ConversationsArchive'
import SideBarHeading from '../SideBarHeading/SideBarHeading'
import SearchBox from '../SearchBox/SearchBox'
import OverlapHeading from '../OverlapHeading/OverlapHeading'

class SideBar extends Component {
  state = {
    activeSideBar: 'first' // Possible values: 'first' or 'second'.
  }

  handleBackClick = () => {
    this.setState({ activeSideBar: 'first' })
  }

  handleComposeClick = () => {
    this.setState({ activeSideBar: 'second' })
  }

  onSearchInSideBarFirst = (text) => {
    console.log('Searched text in SideBarFirst: ', text)
  }

  onSearchInSideBarSecond = (text) => {
    console.log('Searched text in SideBarSecond: ', text)
  }

  render() {
    return (
      <div className={`SideBar SideBar--${this.state.activeSideBar}-active`}>
        <div className='SideBar__first'>
          <SideBarHeading onComposeClick={this.handleComposeClick} />
          <SearchBox onSearch={this.onSearchInSideBarFirst} />
          <ConversationsArchive />
        </div>
        <div className='SideBar__second'>
          <OverlapHeading onBackClick={this.handleBackClick} />
          <SearchBox onSearch={this.onSearchInSideBarSecond} />
          <ConversationsArchive />
        </div>
      </div>
    )
  }
}

export default SideBar
