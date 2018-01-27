import React from 'react'

export default function(props) {
  return (
    <div className="popup-form">
      <dev className="close-btn" onClick={props.onSubmit}>X</dev>
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
            <p>Amount: {props.price} ETH</p>
            <a className="button-popup" onClick={props.onSubmit}>Confirm</a>
          </div>
        </form>
      </section>
    </div>
  )
}
