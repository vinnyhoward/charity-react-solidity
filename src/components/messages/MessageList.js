import React, { Component } from 'react';
import web3 from '../../ethereum/web3';
import './MessageListContainer.css';

export default class MessageList extends Component {
  render() {
    return (
      <div className='message-background'>
      {/*
      <div className='message-line'></div> */}
      <div className='message-padding'>
        <div className='message-title'>{ this.props.donation.username }</div>
        <div className='message-body'>{ this.props.donation.message }</div>
        <div className='message-value'>{ web3.utils.fromWei(this.props.donation.value, 'ether') } ETH</div>
      </div>
    </div>
    )
  }
}
