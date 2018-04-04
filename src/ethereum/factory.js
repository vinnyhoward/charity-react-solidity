import web3 from './web3';
import CharityCampaign from './build/Charity.json';

//pre-configured instance for our contract
const instance = new web3.eth.Contract(
  JSON.parse(CharityCampaign.interface),
  '0x32A6b5A4bf2b34FA6Aa406ab8053826F67C328B9'
);

export default instance;