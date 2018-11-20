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
				{/* <svg id="waves" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 222.73">
    <title>waves</title>
    <path className="cls-1" d="M0,109S315,213,553,213,1191-21,1600,48V258H0Z" transform="translate(0 -35.27)" />
  </svg> */}
				<Banner />
				<div className="main">
					<div className="squeeze">
						<div className="sub-container-flex">
							<SubHeader padding="extra-padding" title="Food" subContent={cannedGood} animation="reg" />
							<SubHeader title="Education" subContent={book} animation="medium" />
							<SubHeader title="Recreation" subContent={park} animation="slow" />
						</div>
						<div className="message-section-title">Donors</div>
						<div className="message-flex">
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
