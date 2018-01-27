 import React, { Component } from 'react'
import { RING } from '../store/constants'
import Ring from './ring'

class Sale extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ring: RING,
    };
  }

  componentWillMount() {
    // TODO: load ring object here
  }

  render() {
    // TODO: buy button onclick should go to payment page
    const btn = <button className="btn">Buy</button>
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
        <section>
          <h2>my ring</h2>
          <Ring ring={this.state.ring} useButton={false} children={btn} />
        </section>
      </div>
    )
  }
}

export default Sale
