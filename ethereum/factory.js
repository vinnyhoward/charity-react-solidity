import web3 from './web3';
import CharityCampaign from './build/CharityCampaign.json';

//pre-configured instance for our contract
const instance = new web3.eth.Contract(
  JSON.parse(CharityCampaign.interface),
  '0x17325e41e0b9EaDc76124a52B9669BFcc8Eeda88'
);

export default instance;