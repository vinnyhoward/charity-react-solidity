import React, { Component } from 'react';
import NavigationBar from './components/navigation/NavigationBar';
import Banner from './components/banner/Banner';
import Layout from './components/layout/Layout';
import MessageListContainer from './components/messages/MessageListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
<Layout>
 <NavigationBar />
      <Banner />
  <div className='main'>
    <div className='squeeze'>
    <MessageListContainer />
    </div>
  </div>
</Layout>
    );
  }
}

export default App;
