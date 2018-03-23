pragma solidity ^0.4.20;

contract CharityFactory {
    address[] public deployedCharities;
    
    function createCharity() public {
        address newCharity = new Charity( msg.sender);
        deployedCharities.push(newCharity);
    }
    
    function getDeployedCharity() public view returns (address[]) {
        return deployedCharities;
    }
}

contract Charity {
    
    struct Donator {
        string imgURL;
        string name;
        string message;
        address recipient;
        uint value;

    }

    address public organization;
    uint public charityCount;
    Donator[] public donators;
    

    function Charity( address creator) public {
      organization = creator;
    }
  
    function contribute() public payable {
      charityCount++;
    }
    
      function createDonation( string imgURL, string name, string message, address recipient, uint value ) public  {
       Donator memory newDonator = Donator({
          imgURL: imgURL,
          name: name,
          message: message,
          recipient: recipient,
          value: value
    });
    
      donators.push(newDonator);
  }
}