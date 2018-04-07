import React from 'react'
import { connect } from 'react-redux'
import etherFromWei from '../web3'

function Address(props) {
  return (
    <div className="address-floating">
      <h2 className="address-floating-title">YOUR ADDRESS</h2>
      <div className="avatar-row">
        <pre className="">{props.defaultAccount}</pre>

      </div>
    </div>
  )
}

export default connect(state => state)(Address)
