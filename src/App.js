import React, { Component } from 'react';
import NavigationBar from './components/navigation/NavigationBar';
import Banner from './components/banner/Banner';
import Layout from './components/layout/Layout';
import MessageList from './components/messages/MessageList';
import './App.css';

class App extends Component {
  render() {
    return (
<Layout>
 <NavigationBar />
      <Banner />
  <div className='main'>
    <div className='squeeze'>
    <MessageList />
    </div>
  </div>
</Layout>
    );
  }
}

export default App;
