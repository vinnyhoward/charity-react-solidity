import React, { Component } from 'react';
import NavigationBar from './components/navigation/NavigationBar';
import Banner from './components/banner/Banner';
import './App.css';

class App extends Component {
  render() {
    return (
<div>
 <NavigationBar />
      <Banner />
  <div className='main'>
    <div className='squeeze'>
    </div>
  </div>
</div>
    );
  }
}

export default App;
