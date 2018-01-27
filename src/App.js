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
import Send from './components/send'
import Payment from './components/payment'

class App extends Component {
  render() {
    const history = createBrowserHistory()
    return (
      <Router history={history}>
        <div className="App">
          <Header history={history} />
          <main className="container">
            <Switch>
              <Route path="/mine" component={Mine} />
              <Route path="/send" component={Send} />
              <Route path="/payment" component={Payment} />
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
