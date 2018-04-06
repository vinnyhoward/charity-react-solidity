import React, { Component } from 'react';
import charity from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import './DonateForm.css';
import Loader from '../common/Loader';

export default class DonateForm extends Component {
  state = {
      name: '',
      description: '',
      recipient: '',
      value: '',
      loading: false,
      errorMessage: ''
  }

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  }


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
  } catch(err) {
    console.log(err.message);
    if(err.message.replace(/ .*/,'') === 'while') {
      this.setState({ errorMessage: "Numbers are only allowed"});
    } 
    if(err.message.replace(/ .*/,'') === 'Returned') {
      this.setState({ errorMessage: "Oops you rejected it! Did you mean to do that?"});
    }
  }
  this.setState({ loading: false, value: '', name: '', description: '' });
  }

  render() {
    if(!this.props.clickOpen) {
      return null;
    }

    return (
<div className='modal-background'>
<div className='form-background'>
<div className='form-header'>Help Our Communities Grow</div>
<div className={ this.state.loading === true ? 'loading-form' : 'hide'}>
  <Loader />
  </div>
  <div className={ this.state.loading === true ? 'hide' : 'flex-forms' }>

    <div className='form-align'>
    </div>
    <div className='form-caption'>Name</div>
    <input 
    maxLength="24"
    value={ this.state.name } 
    onChange={ event=> this.setState({ name: event.target.value })}
    ></input>
    <div className='form-caption'>Message</div>
    <input 
    maxLength="180"
    value={ this.state.description } 
    onChange={ event=> this.setState({ description: event.target.value })}
    ></input>
    <div className='form-caption'>Amount of Eth</div>
    <input 
    value={ this.state.value } 
    onChange={ event=> this.setState({ value: event.target.value })}
    ></input>
    <div className={this.state.errorMessage ? 'error-message' : 'empty'}>{ this.state.errorMessage }</div>
    <button 
    type='button' 
    className='donate-button'
    onClick={ this.onDonateMessageSend }
    >DONATE</button>
  </div>
</div>
</div>
    )
  }
}
