 import React, { Component } from 'react'
import { RING } from '../store/constants'
import Ring from './ring'
import Address from './address'

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

    return (
      <div>
        <Address />
        <section>
          <h2>my ring</h2>
          <Ring ring={this.state.ring} useButton={false} />
          <button className="btn">Buy</button>
        </section>
      </div>
    )
  }
}

export default Sale
