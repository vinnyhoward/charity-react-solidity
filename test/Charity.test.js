const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CharityFactory.json');
const compiledCharity = require('../ethereum/build/Charity.json');

let accounts;
let factory;
let charityAddress;
let charity;

beforeEach( async () => {
  accounts = await web3.eth.getAccounts();

  //Deploying a new contract
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({ data: compiledFactory.bytecode })
  .send({ 
    from: accounts[0], //New contract address
    gas: '3000000'});

  await factory.methods.createCharity().send({
    from: accounts[0],
    gas: '3000000'});

  //destructuring from an array
  [charityAddress] = await factory.methods.getDeployedCharity().call();

  //If contract is already deployed, you pass in interface and contract address origin //Omit .deploy and .send
  charity = await new web3.eth.Contract(
    JSON.parse(compiledCharity.interface), //Pass interface as first argument
    charityAddress //Pass campaign or contract address as second argument 
  );
});

describe('Charity Smart Contract', () => {
  it('It deploys a factory and a charity', () => {
    assert.ok(factory.options.address);
    assert.ok(charity.options.address);
    // console.log('Factory Address:', factory.options.address, 'Charity Address:', charity.options.address);
  });

  // it('Allows people contribute to charity', async () => {
  //   try {
  //   await charity.methods
  //   .contribute().send({ //Create instance of a new address
  //     value: web3.utils.toWei('1', 'ether'),
  //     from: accounts[0]
  //   });
  // } catch (err) {
  //   console.log('BALANCE', balance = await web3.eth.getBalance(accounts[0]));
  //   console.log(err);
  // }
  // });

  // it('Allows users to donate and write messages', async () => {
  //   await charity.methods
  //   .donationMessage('I love you guys', 'Vince Howard', 100 )
  //   .send({
  //     from: accounts[0],
  //     gas: '1000000'
  //   });

  //   const donation = await charity.methods.donators(0).call();
  //   assert.equal('Hello World', donation.message);
  // });

  it('When user contributes some amount of ether, charity count will go up by one', async () => {
      await charity.methods
      .contributeMessage('I love you guys', 'Vince Howard', 100 ).send({ //Create instance of a new address
        value: web3.utils.toWei('1', 'ether'),
        from: accounts[0],
        gas: '1000000'
      });
      count = await charity.methods.charityCount().call()
      assert.equal(count, 1);
    });
});
