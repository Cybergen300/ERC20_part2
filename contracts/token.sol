pragma solidity ^0.6.7; 

contract token { 
	string public name = "ERC20 token";
	string public symbol = "ERC20";
	uint256 public totalSupply  = 1000000000000000000000000;
	uint8 public decimals = 18;

	mapping(address => uint256) public balanceOf;

	//create the Transfer event required by the ERC20 token structure 
	event Transfer(
		address indexed _from,
		address indexed _to, 
		uint256 _value);


	//allocate the total token  supply  to the address of the message sender
	constructor() public { 
		balanceOf[msg.sender] = totalSupply;
	}

	//transfer function
	function transfer(address _to, uint256 _value) public returns (bool success) {
		//make sure that the function call is coming from the message sender
		require(balanceOf[msg.sender] >= _value);

		//change the balance of the sender and of the recipients accordingly
		balanceOf[msg.sender] -= _value;
		balanceOf[_to] += _value; 

		//emit the event to inform blockchain users about the nature of the transaction
		emit Transfer(msg.sender, _to, _value);

		//return a boolean statament in order to confirm the success of the transaction
		return true;
	}
}













