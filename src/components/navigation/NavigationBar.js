import React, { Component } from 'react';
import './NavigationBar.css';

export default class NavigationBar extends Component {
  render() {
    return (
<div className='nav-background'>
  <div className='nav-container'>
    <div className='nav-flex'>
      <ul>
        <li className='nav-title'>CHARITY</li>
      </ul>
      <div className='nav-align-right'>
        <div className='nav-flex-right'>
          <a className='ion-social-github' href="https://github.com/vinnyhoward"></a>
          <a className='ion-social-linkedin' href="https://www.linkedin.com/in/vinnyhoward/"></a>
          <a className='ion-social-instagram-outline' href="https://www.instagram.com/vinnyvader/"></a>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}
