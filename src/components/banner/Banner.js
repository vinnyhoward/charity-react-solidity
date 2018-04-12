import React, { Component } from 'react';
import DonateForm from '../form/DonateForm';
import iphoneX from '../../images/Asset2@2x.png';
import charity from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import './Banner.css';
import '../../App.css';

export default class Banner extends Component {
  state={ 
    modalOpen: false,
    balance: '',
    donatorsCount: '',
    charityCount: '',
   }

   componentDidMount = async event => {
    const summary = await charity.methods.getSummary().call();
      this.setState({
        balance: summary[0],
        donatorsCount: summary[1],
        charityCount: summary[2]
      })
  }

  clickOpenModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  render() {
    // const { balance, donatorsCount, charityCount  } = this.props
     return (
<div className='banner-background'>
        <DonateForm 
        clickOpen={this.state.modalOpen} 
        onClose={this.clickOpenModal} 
        />
  <div className='main'>
    <div className='squeeze'>
      <div className='banner-flex'>
        <div className='column__one-third'>
        {/* <div className='banner-caption'>Join the cause and help others in need</div> */}
        <div className='banner-header'>Help rebuild communities in need</div>
        <div className='banner-caption__description-amount'>Our goal is to help impoverished communities. So far <span>{ web3.utils.fromWei(this.state.balance, 'ether') }</span> was raised thanks to you!</div>
        <button 
        className='donate-button__banner'
        onClick={ this.clickOpenModal }
        >Contribute</button>

         <button 
        className='info-button__banner'
        >More Info</button>
        </div>  
        <div className='column__two-third'>
        <img className='iphonex-asset' src={iphoneX} alt="iPhoneX"/>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}
