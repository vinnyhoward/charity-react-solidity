import web3 from './web3';
import CharityCampaign from './build/Charity.json';

//pre-configured instance for our contract
const instance = new web3.eth.Contract(
  JSON.parse(CharityCampaign.interface),
  '0x3516f03f5f09729a3f9925a65a74ffe9ed1d9419'
);

export default instance;