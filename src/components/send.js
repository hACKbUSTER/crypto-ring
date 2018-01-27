import React from 'react'

export default function(props) {
  return (
    <div>
      <section className="popup-header">
        <h2 className="popup-title with-border">to the one</h2>
      </section>
      <section className="">
        <form>
          <div className="popup-field">
            <label>Send from:</label>
            <input type="text" />
          </div>
          <div className="popup-field">
            <label>To:</label>
            <input type="text" />
          </div>
          <div className="popup-field">
            <p>Note:</p>
            <textarea placeholder="Your word to your lover."></textarea>
          </div>
          <div className="popup-field">
            <label>Your lover's email address:</label>
            <input type="text" placeholder="someluckylover@domain.com" />
          </div>
          <div className="popup-button-row">
            <a className="button-popup" href="#">Confirm</a>
          </div>
        </form>
      </section>
    </div>
  )
}
