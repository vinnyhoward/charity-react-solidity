pragma solidity ^0.4.20;

contract CharityFactory {
    address[] public deployedCharities;
    
    function createCharity() public {
        address newCharity = new Charity( msg.sender );
        deployedCharities.push(newCharity);
    }
    
    function getDeployedCharity() public view returns (address[]) {
        return deployedCharities;
    }
}


contract Charity{
  event CharityEvent(
    address _from,
    string _message,
    string _username,
    uint _value
  );
  
  struct Donator {
    string message;
    string username;
    uint value;
}

address public organization;
Donator[] public donators;
uint public charityCount;

   function Charity( address creator) public {
      organization = creator;
    }
  

    function contribute() public payable {
      charityCount++;
    }

  function donationMessage(string message, string username, uint value) public {
    emit CharityEvent(msg.sender, message, username, value);
        Donator memory newDonator = Donator({
         message: message,
         username: username,
         value: value
    });
        donators.push(newDonator);
  }
}