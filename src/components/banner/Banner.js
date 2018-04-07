import React, { Component } from 'react';
import DonateForm from '../form/DonateForm';
import './Banner.css';
import '../../App.css';

export default class Banner extends Component {
  state={ 
    modalOpen: false,
   }

  clickOpenModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  render() {
    return (
<div className='banner-background'>
        <DonateForm 
        clickOpen={this.state.modalOpen} 
        onClose={this.clickOpenModal} 
        />
  <div className='main'>
    <div className='squeeze'>
      <div className='banner-flex'>
        <div className='column-half'>
        {/* <div className='banner-caption'>Join the cause and help others in need</div> */}
        <button 
        className='donate-button'
        onClick={ this.clickOpenModal }
        >Donate</button>
        </div>
        <div className='column-half'>
     
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}
