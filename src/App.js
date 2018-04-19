import React, { Component } from 'react';
import NavigationBar from './components/navigation/NavigationBar';
import Banner from './components/banner/Banner';
import Layout from './components/layout/Layout';
import MessageListContainer from './components/messages/MessageListContainer';
import SubHeader from './components/subHeader/SubHeader';
import './App.css';

const book = require('./images/book-iso.png');
const park = require('./images/tree-iso.png');
const cannedGood = require('./images/can-iso.png');

class App extends Component {
  render() {
    return (
<Layout>
 <NavigationBar />
      <Banner />
  <div className='main'>
    <div className='squeeze'>
    <div className='sub-container-flex'>
    <SubHeader
    padding='extra-padding'
    title='Food'
    subContent={cannedGood}
    animation='reg'
    />
    <SubHeader
    title='Education'
    subContent={book}
    animation='medium'
    />
    <SubHeader
    title='Recreation'
    subContent={park}
    animation='slow'
    />
    </div>
    <div className='message-section-title'>Donators</div>
    <div className='message-flex'>
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
