import React, { Component } from 'react';
import DonateForm from '../form/DonateForm';
import './Banner.css';
import '../../App.css';

export default class Banner extends Component {
  render() {
    return (
<div className='banner-background'>
  <div className='main'>
    <div className='squeeze'>
      <div className='banner-flex'>
        <div className='column-half'>
        {/* <div className='banner-caption'>Join the cause and help others in need</div> */}
        <DonateForm />
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
