const Token = artifacts.require("token.sol")

module.exports = (deployer, network) => {
  // Local (development) 
  // token contract deployment 
  if (!network.startsWith('live')) {

	deployer.deploy(Token).then( token => {
    //we transfer all the tokens to the contract
    token.transfer(token.address, '1000000000000000000000000')
    }) 
  } else {
    // Live development 
    // token contract deployment 
	deployer.deploy(Token).then(token => {
    //we transfer all the tokens to the contract
    token.transfer(token.address, '1000000000000000000000000')
    })
  }
}
