// smart contract testing 

//We call our token contract
const Token = artifacts.require('./token.sol')

//load the chai library enabling us to use its TDD assert style
require('chai')
	.use(require('chai-as-promised'))
	.should()

//function using web3 to  convert the value into a normal value without the 18 decimals
function decimals(n) {
	return web3.utils.toWei(n,'ether')
}

//Basic contract testing
//We deploy our token contract
contract('token contract testing', ([deployer, investor]) => {
	//varibale declaration
	let token

	before(async() => {

		//Create a new instance of our token contract
		token = await Token.new()

	})

	describe('token contract', async() => {
		it('token contract specs verification', async() => {
			//name verification
			const tokenName = await token.name()
			assert.equal(tokenName, "ERC20 token")
			//symbol verification
			const tokenSymbol = await token.symbol()
			assert.equal(tokenSymbol, "ERC20")
			//total supply verification
			const tokenSupply = await token.totalSupply()
			//console.log(tokenSupply)
		})
	})
})





