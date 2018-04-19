import React, { Component } from 'react';
import './NavigationBar.css';

export default class NavigationBar extends Component {
  render() {
    return (
<div className='nav-background'>
<div className='main-nav'>
  <div className='squeeze'>
  <div>
    <div className='nav-flex'>
      <ul>
        <li className='nav-title'>IMPAV FOUNDATIONS</li>
      </ul>
      <div className='nav-align-right'>
        <div className='nav-flex-right'>
          <a href="https://github.com/vinnyhoward"><div className='ion-social-github'></div></a>
          <a href="https://www.linkedin.com/in/vinnyhoward/"><div className='ion-social-linkedin'></div></a>
          <a href="https://www.instagram.com/vinnyvader/"><div className='ion-social-instagram-outline'></div></a>
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>
</div>
    )
  }
}
