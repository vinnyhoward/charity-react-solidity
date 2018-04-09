import React, { Component } from 'react';
import charity from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

export default class MessageList extends Component {
  state = {
    name: '',
    description: '',
    value: '',
    loading: false,
    errorMessage: ''
}

// componentDidMount = async event => {
//   const charity = await charity.methods.donators().call()

//   return { charity };
// }

// renderMessages() {
//   const mappedMessages = this.props.campaigns.map(messageList => {
//     return {
//       messageList
//     }
//   })
// }

  render() {
    return (
      <div>
        {/* { this.renderMessages } */}
      </div>
    )
  }
}
