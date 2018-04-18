import React, { Component } from 'react';
import charity from '../../ethereum/factory';
// import web3 from '../../ethereum/web3';
import './MessageListContainer.css';

export default class MessageListContainer extends Component {
  constructor(props) {
    super(props)
  this.state = {
    name: '',
    description: '',
    value: '',
    loading: false,
    errorMessage: '',
}
  }

  static async getDerivedStateFromProps(props)  {
  const charityCount = await charity.methods.charityCount().call();
  const messageRequests = await Promise.all(
    Array(parseInt(charityCount)).fill().map((element, index) => {
      return charity.methods.donators(index).call()
    }),
  );
  return {messageRequests} 
  //  let requests = messageRequests.map((messageRequests, index) => {
  //   return <div key={index} className='test-1'>
  //     { messageRequests.message }
  //     </div>
  // })
  this.setState({
    description: messageRequests[0].message

  })

}

renderMessages = () => {
  // return this.props.messageRequests.map((messageRequests, index) => {
  //   return <div key={index} className='test-1'>
  //     { messageRequests.message }
  //     </div>
  // })
console.log(this.props.messageRequests);
}

  render() {
    return (
<div onClick={ this.renderMessages } className='message-background'>
{/* <div className='message-line'></div> */}
  <div className='message-padding'>
    { this.state.description }
    <div className='message-title'>Laynie Tucker</div>
    <div className='message-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium laboriosam? Voluptate excepturi nisi, maxime architecto facilis tempore exercitationem enim.</div>
      <div className='message-value'>0.4 ETH</div>
  </div>
</div>
    )
  }
}
