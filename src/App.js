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
import Home from './components/home'
import Sale from './components/sale'
import Forge from './components/forge'
import Market from './components/market'
import Header from './components/header'
import Witness from './components/witness'
import web3js from './web3';

class App extends Component {
  state = {
    balance: 0,
    network: 0,
  };

  componentDidMount() {
    web3js.eth.defaultAccount = web3js.eth.accounts[0];
    this.syncEthInfo();
    // TODO: setTimeout to check if watch succeed
    // If not, prompt user to reopen browser
    web3js.eth.filter('latest').watch(this.syncEthInfo);
  }

  syncEthInfo = () => {
    web3js.eth.getBalance(web3js.eth.coinbase, (e, balance) => this.setState({ balance }));
    web3js.version.getNetwork((e, network) => this.setState({ network }));
  };

  render() {
    const history = createBrowserHistory()

    return (
      <Router history={history}>
        <div className="App">
          <Header history={history} network={this.state.network} />
          <main className="container">
            <Switch>
              <Route path="/mine" component={Mine} />
              <Route path="/forge" component={Forge} />
              <Route path="/market/:tab" component={Market} />
              <Route path="/sale/:id" component={Sale} />
              <Route path="/witness/:id" component={Witness} />
              <Route path="/" exact component={Home} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App
