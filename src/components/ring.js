import React from 'react'
import { MATERIAL, FORGER } from '../store/constants'
import imgRing from '../img/ring.png'

export default function(props) {
  const { id, price, timestamp, materials, forger, transaction_type: currentType, rarity, reforge_count, note, from: fromAddr, to: toAddr } = props.ring;
  let buttons;
  if (currentType === 0) {
    // TODO: onclick reforge
    // TODO: onclick give modal
    buttons = (<div>
      <button className="btn">Re-forge ({reforge_count}/5)</button>
      <button className="btn">Give it to the one</button>
    </div>)
  } else if (currentType === 1) {
    buttons = (<div>
      <button className="btn" disabled>Waiting for confirmation</button>
    </div>)
  }

  return (
    <div className="ring-row">
      <div className="ring-img">
        <img src={imgRing} />
      </div>
      <div className="ring-info">
        <h3>ID #{id}</h3>
        <p>Price: {price} ETH</p>
        <p>Material: {materials.map(m => `${m.madeup * 100}% ${MATERIAL[m.material]}`).join(', ')}</p>
        <p>Class: {FORGER[forger]}</p>
        <p>Creation Date: {(new Date(timestamp)).toLocaleString()}</p>
        <p>Creation Block Height: 645, 342</p>
        <p>Rarity: {rarity}</p>
        {fromAddr && <p>From: {fromAddr}</p>}
        {toAddr && <p>To: {toAddr}</p>}
        {note && <p>Note: {note}</p>}
        {props.useButton && buttons}
        {props.children}
      </div>
    </div>
  )
}
