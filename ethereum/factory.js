import web3 from './web3';
import CharityCampaign from './build/Charity.json';

//pre-configured instance for our contract
const instance = new web3.eth.Contract(
  JSON.parse(CharityCampaign.interface),
  '0x20c30c55bbf5a6d3776526dcc17b33480d545177'
);

export default instance;