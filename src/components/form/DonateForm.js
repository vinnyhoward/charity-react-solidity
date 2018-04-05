import React, { Component } from 'react';
import charity from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import './DonateForm.css';

export default class DonateForm extends Component {
  state = {
      name: '',
      description: '',
      recipient: '',
      value: '',
      loading: false,
      errorMessage: ''
  }
  
  // onSubmit = async event => {
  //   event.preventDefault();
  
  //   this.setState({ 
  //     loading: true,
  //     errorMessage: ''
  //   });
  // try {
  //   const accounts = await web3.eth.getAccounts();
  //   await charity.methods.contribute().send({
  //     from: accounts[0],
  //     value: web3.utils.toWei(this.state.value, 'ether')
  //   });
  // } catch(err) {
  //   this.setState({ errorMessage: err.message });
  // }
  // this.setState({ loading: false, value: '' });
  // };

  onDonateMessageSend = async event => {
    event.preventDefault();
    const { description, name, value } = this.state;
  
    this.setState({ 
      loading: true,
      errorMessage: ''
    });
  try {
    const accounts = await web3.eth.getAccounts();
    await charity.methods.contributeMessage( description, name, web3.utils.toWei( value, 'ether' ) )
    .send({ 
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
     })
     console.log('Did it work');

  } catch(err) {
    this.setState({ errorMessage: err.message });
  }
  this.setState({ loading: false, value: '' });
  }

  render() {
    return (
<div className='form-background'>
  <div className='flex-forms'>
    <div className='form-align'>
    </div>
    <input 
    placeholder='Whats your name?' 
    value={ this.state.name } 
    onChange={ event=> this.setState({ name: event.target.value })}
    ></input>
    <input 
    placeholder='Write an empowering message' 
    value={ this.state.description } 
    onChange={ event=> this.setState({ description: event.target.value })}
    ></input>
    <input 
    placeholder='Donate some amount of Eth' 
    value={ this.state.value } 
    onChange={ event=> this.setState({ value: event.target.value })}
    ></input>
    <button 
    type='button' 
    className='donate-button'
    onClick={ this.onDonateMessageSend }
    >DONATE</button>
  </div>
</div>
    )
  }
}
