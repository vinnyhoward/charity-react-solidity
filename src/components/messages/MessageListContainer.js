import React, { Component } from 'react';
import charity from '../../ethereum/factory';
import MessageList from './MessageList';
// import web3 from '../../ethereum/web3';
import './MessageListContainer.css';

export default class MessageListContainer extends Component {
  state = {
    loading: false,
    errorMessage: '',
    messageList: []
}

componentDidMount = async event => {
  const charityCount = await charity.methods.charityCount().call();
  const messageRequests = await Promise.all(
    Array(parseInt(charityCount, 0)).fill().map((element, index) => {
      return charity.methods.donators(index).call()
    }),
  );
  this.setState({
    messageList: messageRequests
  })
}

renderMessages = () => {
  return this.state.messageList.map((donation, index) => {
    return <MessageList
    key={index}
    donation={donation}
    />
  })
}

  render() {
    return (
<div className='message-flex'>
{ this.renderMessages() }
</div>
    )
  }
}
