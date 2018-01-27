import React from 'react'

export default function(props) {
  return (
    <div>
      <section className="popup-header">
        <h2 className="popup-title with-border">forge payment</h2>
      </section>
      <section>
        <form>
          <div className="popup-field">
            <label>Send from:</label>
            <pre className="address popup-highlight">0x00435452354265345432</pre>
          </div>
          <div className="popup-field">
            <label>To:</label>
            <pre className="address popup-highlight">0x00435452354265345432</pre>
          </div>
          <div className="popup-button-row">
            <p>Amount: 0.356 ETH</p>
            <a className="button-popup" href="#">Confirm</a>
          </div>
        </form>
      </section>
    </div>
  )
}
