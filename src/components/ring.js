import React from 'react'
import { MATERIAL, FORGER } from '../store/constants'
import imgRing from '../img/ring.png'
import Send from './send'

class Ring extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      from: '',
      to: '',
      note: '',
      email: '',
      showModal: false,
    };
  }

  onChange = (field, e) => {
    this.setState({
      [field]: e.target ? e.target.value : e,
    })
  }

  onSubmit = () => {
    // TODO: make transaction
    this.setState({
      showModal: false
    })
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const { id, price, timestamp, materials, forger, transaction_type: currentType, rarity, reforge_count, note, from: fromAddr, to: toAddr } = this.props.ring;
    let buttons;
    if (currentType === 0) {
      // TODO: onclick reforge
      buttons = (<div>
        <button className="btn">Re-forge ({reforge_count}/5)</button>
        <button className="btn" onClick={this.toggleModal}>Give it to the one</button>
      </div>)
    } else if (currentType === 1) {
      buttons = (<div>
        <button className="btn" disabled>Waiting for confirmation</button>
      </div>)
    }

    const sendProps = Object.assign({}, this.state, {
      onChange: this.onChange,
      onSubmit: this.onSubmit,
      toggleModal: this.toggleModal,
    });

    return (
      <div className="ring-row">
        <div className="ring-img">
          <img role="presentation" src={imgRing} />
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
          {this.props.useButton && buttons}
          {this.props.children}
        </div>
        {this.state.showModal && <div className="overlay">
          <Send {...sendProps} />
        </div>}
      </div>
    )
  }
}

export default Ring
