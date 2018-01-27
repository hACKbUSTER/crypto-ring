import React, { Component } from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'

import './css/noto-serif.css'
import './css/pure-min.css'
import './App.css'
import Mine from './components/mine'
import Find from './components/find'
import Home from './components/home'
import Sale from './components/sale'
import Forge from './components/forge'
import Market from './components/market'
import Header from './components/header'
import Witness from './components/witness'
import getWeb3 from './utils/getWeb3'
import Web3 from 'web3'

class App extends Component {
  render() {
    const history = createBrowserHistory()
    var provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545')
    var web3 = new Web3(provider)
    web3.eth.defaultAccount = web3.eth.accounts[0]

    return (
      <Router history={history}>
        <div className="App">
          <Header history={history} />
          <Switch>
            <main className="container">
              <Route path="/mine" component={Mine} />
              <Route path="/find" component={Find} />
              <Route path="/forge" component={Forge} />
              <Route path="/market/:tab" component={Market} />
              <Route path="/sale/:id" component={Sale} />
              <Route path="/witness/:id" component={Witness} />
              <Route path="/" exact component={Home} />
            </main>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
