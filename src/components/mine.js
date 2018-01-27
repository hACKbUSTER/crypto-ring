import React, { Component } from 'react'
import Ring from './ring'
import { RING } from '../store/constants'
import Web3 from 'web3'

class Mine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasRing: true,
      ring: RING,
    };
  }

  componentWillMount() {
    // do loading here, and overwrite this.state.ring
  }

  renderRingInfo() {
    return (
      <section>
        <h2>my ring</h2>
        <Ring ring={this.state.ring} useButton={true} />
      </section>
    )
  }

  renderNoRing() {
    return (
      <section className="ring-intro-section">
        <h2>my ring</h2>
        <p>
          You don’t have any rings for now.<br />
          You can either forge a new one, or find your meant-to-be masterpiece in your life.
        </p>
        <div className="button-row">
          <a className="btn" href="/forge">Forge a new ring</a>
          <div className="separator"><span>or</span></div>
          <a className="btn" href="/market/sale">Find your masterpiece</a>
        </div>
      </section>
    )
  }

  render() {
    var provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545')
    var web3 = new Web3(provider)
    web3.eth.defaultAccount = web3.eth.accounts[0]

    return (
          <div>
            <section>
              <h2>your address</h2>
              <div className="avatar-row">
                <div className="avatar">
                  <img alt="avatar" src="https://s3.amazonaws.com/cdn-live.sketch.cloud/default_avatars/m/2.png" />
                </div>
                <pre className="address highlight">{web3.eth.defaultAccount}</pre>
              </div>
            </section>
            {this.state.hasRing ? this.renderRingInfo() : this.renderNoRing()}
          </div>
        )
  }
}

export default Mine
