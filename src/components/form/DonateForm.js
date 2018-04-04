import React, { Component } from 'react';
import Charity from '../../ethereum/charity';
import web3 from '../../ethereum/web3';
import './DonateForm.css';

export default class DonateForm extends Component {
  state = {
      imgURL: '',
      name: '',
      description: '',
      recipient: '',
      value: '',
      loading: false,
      errorMessage: ''
  }

  onSubmit = async event => {
  event.preventDefault();

  const charity = new Charity(this.props.address);
  const { imgURL, name, description, recipient, value } = this.state

  this.setState({
    loading: true, errorMessage: ''
  })
  try {
    const accounts = await web3.eth.getAccounts();
    await charity.methods.createDonation( imgURL, name, description, recipient, web3.utils.toWei( value, 'ether' ))
    .send({ 
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
     })
  } catch (err) {
    this.setState({
      errorMessage: err.message
    })
  }
  this.setState({ loading: false })
  }

  render() {
    return (
<div className='form-background'>
  <div className='flex-forms'>
    <div className='form-align'>
      {/*
      <div className='form-caption'>Avatar</div> */}
    </div>
    <input 
    placeholder='Upload any image' 
    type='text' value={ this.state.imgURL } 
    onChange={ event=> this.setState({ imgURL: event.target.value })}
    ></input>
    {/*
    <div className='form-caption'>Name</div> */}
    <input 
    placeholder='Pick a nickname' 
    value={ this.state.name } 
    onChange={ event=> this.setState({ name: event.target.value })}
    ></input>
    {/*
    <div className='form-caption'>Message</div> */}
    <input 
    placeholder='Write a sweet message' 
    value={ this.state.description } 
    onChange={ event=> this.setState({ description: event.target.value })}
    ></input>
    {/*
    <div className='form-caption'>Address</div> */}
    <input 
    placeholder='Your eth address goes here' 
    value={ this.state.recipient } 
    onChange={ event=> this.setState({ recipient: event.target.value })}
    ></input>
    {/*
    <div className='form-caption'>Amount</div> */}
    <input 
    placeholder='Donate some amount of Eth' 
    value={ this.state.value } 
    onChange={ event=> this.setState({ value: event.target.value })}
    ></input>
    <button 
    type='button' 
    className='donate-button'
    onClick={ this.onSubmit }
    >DONATE</button>
  </div>
</div>
    )
  }
}
