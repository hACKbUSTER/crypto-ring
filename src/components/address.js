import React from 'react'
import { connect } from 'react-redux'

function Address(props) {
  return (
    <section className="padded-section with-border">
      <h2>your address</h2>
      <div className="avatar-row">
        <div className="avatar">
          <img alt="avatar" src="https://s3.amazonaws.com/cdn-live.sketch.cloud/default_avatars/m/2.png" />
        </div>
        <pre className="address highlight">{props.defaultAccount}</pre>
      </div>
    </section>
  )
}

export default connect(state => state)(Address)
