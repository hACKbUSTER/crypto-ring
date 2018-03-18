import React from 'react'
import imgHome from '../img/luxury.png'
import img1 from '../img/pic1.png'
import img2 from '../img/pic2.png'
import img3 from '../img/pic3.png'
import img4 from '../img/pic4.png'
import contractJson from '../../build/contracts/KittyMinting.json';
import web3js from '../web3'

export default function(props) {

	// var MyContract = web3js.eth.contract(contractJson.abi);
	// // initiate contract for an address
	// var myContractInstance = MyContract.at('0x75c35c980c0d37ef46df04d31a140b65503c0eed');
	
	// myContractInstance.createPromoKitty(1,web3js.eth.defaultAccount,{
 //      gas: 220000,
 //    }, () => console.log(arguments));
	// myContractInstance.methods.createPromoKitty(27363,web3js.eth.defaultAccount).send().then(function(receipt){
    // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
	// });
  //Declare to the world, we are made for each other
  return (
    <div className="home-main">
      <h1 className="home-title">CRYPTO RING</h1>
      <h2 className="home-subtitle">Declare to the world, we are made for each other.</h2>
      <div className="home-button-container">
      <p className="home-button">
      <a href="/#">
      LEARN MORE
      </a>
      </p>
      <p className="home-button">
      <a href="/mine">
      GET STARTED
      </a>
      </p>
      </div>
    </div>
  )
}
