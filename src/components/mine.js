import React, { Component } from 'react'
import Ring from './ring'
import { RING } from '../store/constants'

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
    return (
      <div>
        <section className="with-border padded-section">
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
