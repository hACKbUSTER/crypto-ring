import React, { Component } from 'react'
import { RING, MATERIAL, TRANSACTION_TYPE, FORGER } from '../store/constants'
import imgRing from '../img/ring.png'

class Mine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasRing: false,
      ring: RING,
    };
  }

  componentWillMount() {
    // do loading here, and overwrite this.state.ring
  }

  renderRingInfo() {
    const { id, price, timestamp, materials, forger, transaction_type, rarity, reforge_count, note, from, to } = this.state.ring;
    return (
      <section>
        <h2>my ring</h2>
        <div className="ring-row">
          <div className="ring-img">
            <img src={imgRing} />
          </div>
          <div className="ring-info">
            <h3>ID #{id}</h3>
            <p>Price: {price} ETH</p>
            <p>Material: {materials.map(m => `${m.madeup * 100}% ${MATERIAL[m.material]}`).join(', ')}</p>
            <p>Class: {FORGER[forger]}</p>
            <p>Creation Date: {(new Date(timestamp)).toLocaleString()}</p>
            <p>Rarity: {rarity}</p>
            <button className="btn">Re-forge ({reforge_count}/5)</button>
            <button className="btn">Give it to the one</button>
          </div>
        </div>
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
    return (
      <div>
        <section>
          <h2>your address</h2>
          <div className="avatar-row">
            <div className="avatar">
              <img alt="avatar" src="https://s3.amazonaws.com/cdn-live.sketch.cloud/default_avatars/m/2.png" />
            </div>
            <pre className="address highlight">0x00435452354265345432</pre>
          </div>
        </section>
        {this.state.hasRing ? this.renderRingInfo() : this.renderNoRing()}
      </div>
    )
  }
}

export default Mine
