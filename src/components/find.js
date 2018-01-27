import React from 'react'

export default function(props) {
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
      <section className="ring-intro-section">
        <h2>my ring</h2>
        <p>
          You don’t have any rings for now.<br />
          You can either forge a new one, or find your meant-to-be masterpiece in your life.
        </p>
        <div className="button-row">
          <a href="/forge">Forge a new ring</a>
          <div className="separator"><span>or</span></div>
          <a href="/market/sale">Find your masterpiece</a>
        </div>
      </section>
    </div>
  )
}
