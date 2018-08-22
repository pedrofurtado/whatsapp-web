import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './SideBar.css'
import ConversationsArchive from '../ConversationsArchive/ConversationsArchive'
import SideBarHeading from '../SideBarHeading/SideBarHeading'
import SearchBox from '../SearchBox/SearchBox'
import OverlapHeading from '../OverlapHeading/OverlapHeading'
import { load as loadConversations, create as createConversation, remove as removeConversation, removeAll as removeAllConversations } from '../../redux/ducks/conversation'

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
          <ConversationsArchive conversations={this.props.conversations} />
        </div>
        <div className='SideBar__second'>
          <OverlapHeading onBackClick={this.handleBackClick} />
          <SearchBox onSearch={this.onSearchInSideBarSecond} />
          <ConversationsArchive conversations={this.props.conversations} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  conversations: state.conversations
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadConversations,
  createConversation,
  removeConversation,
  removeAllConversations
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
