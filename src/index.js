import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import getWeb3 from './utils/getWeb3';

let data = {}
let web3js

getWeb3().then(results => {
  web3js = results.web3
  data.defaultAccount = web3js.eth.accounts[0];
  data.currentProvider = web3js.currentProvider;
  data.contractAddress = {
    minting: 0x75c35c980c0d37ef46df04d31a140b65503c0eed,
  };

  ReactDOM.render(
    <Provider store={configureStore(data)}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})
