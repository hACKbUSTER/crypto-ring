import Web3 from 'web3';

let web3Provider;

// Checking if Web3 has been injected by the browser (Mist/MetaMask)
if (typeof web3 !== 'undefined') {
  // Use Mist/MetaMask's provider
  web3Provider = window.web3.currentProvider;
} else if (process.env.NODE_ENV === 'development') {
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  web3Provider = new Web3.providers.HttpProvider("http://localhost:7545");
} else {
  console.error('No web3Instance? You should consider trying MetaMask!');
  throw new Error('Please install MetaMask');
}

const web3js = new Web3(web3Provider);

export const etherFromWei = num => Web3.fromWei(num, 'ether').toString();
export const networkName = num => {if(num == 1) return 'Main Etherum network connection ok'; else return 'Test network connection ok';};

export default web3js;