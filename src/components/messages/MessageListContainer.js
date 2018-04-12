import React, { Component } from 'react';
import charity from '../../ethereum/factory';
// import web3 from '../../ethereum/web3';

export default class MessageListContainer extends Component {
  state = {
    name: '',
    description: '',
    value: '',
    loading: false,
    errorMessage: '',
}

componentDidMount = async event => {
  const charityCount = await charity.methods.charityCount().call();
  const requests = await Promise.all(
    Array(parseInt(charityCount, 0)).fill().map((element, index) => {
      return charity.methods.donators(index).call()
    })
  );

  console.log( 'result', requests );
  // return { requests }
}

// renderMessages = () => {
//   return mappedMessages = this.props.requests.map( (messageList, index) => {
//     return 
//       <div key={index}>
//       { messageList }
//       </div>
//   })
// }

  render() {
    return (
      <div>
        {/* { this.renderMessages() } */}
      </div>
    )
  }
}
