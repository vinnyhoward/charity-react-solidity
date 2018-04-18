import React, { Component } from 'react';
import NavigationBar from './components/navigation/NavigationBar';
import Banner from './components/banner/Banner';
import Layout from './components/layout/Layout';
import MessageListContainer from './components/messages/MessageListContainer';
import SubHeader from './components/subHeader/SubHeader';
import './App.css';

class App extends Component {
  render() {
    return (
<Layout>
 <NavigationBar />
      <Banner />
  <div className='main'>
    <div className='squeeze'>
    <div className='sub-container-flex'>
    {/* <SubHeader/>
    <SubHeader/>
    <SubHeader/> */}
    </div>
    <div className='message-section-title'>Donators</div>
    <div className='message-flex'>
    <MessageListContainer />
    <MessageListContainer />
    <MessageListContainer />
    {/* <div className='round-circle'></div> */}
    </div>
    </div>
  </div>
</Layout>
    );
  }
}

export default App;
