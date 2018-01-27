import React from 'react'

export default function(props) {
  return (
    <div className="popup-form">
      <dev className="close-btn" onClick={props.toggleModal}>X</dev>
      <section className="popup-header">
        <h2 className="popup-title with-border">to the one</h2>
      </section>
      <section className="">
        <form>
          <div className="popup-field">
            <label>Send from:</label>
            <input type="text" className="pure-input" value={props.from} onChange={props.onChange.bind(this, 'from')} />
          </div>
          <div className="popup-field">
            <label>To:</label>
            <input type="text" className="pure-input" value={props.to} onChange={props.onChange.bind(this, 'to')} />
          </div>
          <div className="popup-field">
            <p>Note:</p>
            <textarea value={props.note} className="pure-input" onChange={props.onChange.bind(this, 'note')} placeholder="Your word to your lover."></textarea>
          </div>
          <div className="popup-field">
            <label>Your lover's email address:</label>
            <input className="pure-input" type="text" placeholder="someluckylover@domain.com" value={props.email} onChange={props.onChange.bind(this, 'email')} />
          </div>
          <div className="popup-button-row">
            <a className="button-popup" onClick={props.onSubmit}>Confirm</a>
          </div>
        </form>
      </section>
    </div>
  )
}
