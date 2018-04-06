import React, { Component } from 'react';
import './Loader.css';

export default class Loader extends Component {
  render() {
    return (
      <div className='ring'>
       Wait for it...
        <span></span>
      </div>
    )
  }
}
