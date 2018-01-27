import React, { Component } from 'react'
import { MATERIAL, FORGER } from '../store/constants'
import Payment from './payment'

class Forge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      materials: [0],
      forger: 0,
      id: Date.now(),
      price: Math.ceil(Math.random() * 10000) / 10000,
      timestamp: Date.now(),
      transaction_type: 1,
      rarity: 'High',
      reforge_count: 0,
      note: '',
      from: '',
      to: '',
      showModal: false,
    };
  }

  confirmPay() {
    this.toggleModal()
  }

  updateForger = (forger) => {
    this.setState({
      forger
    })
  }

  updateMaterial = (material) => {
    const materials = this.state.materials.slice(0)
    const index = materials.indexOf(material)
    if (~index) {
      materials.splice(index, 1)
      this.setState({ materials })
    } else {
      this.setState({
        materials: [...materials, material],
      })
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    })
  }

  render() {
    const { materials, forger, price } = this.state;
    const paymentProps = {
      price,
      onSubmit: this.toggleModal,
    };
    return (
      <div>
        <section className="with-border padded-section">
          <h2>your address</h2>
          <div className="avatar-row">
            <div className="avatar">
              <img alt="avatar" src="https://s3.amazonaws.com/cdn-live.sketch.cloud/default_avatars/m/2.png" />
            </div>
            <pre className="address highlight">0x00435452354265345432</pre>
          </div>
        </section>
        <section className="form with-border padded-section">
          <h2>artisan</h2>
          <div className="form-item">
            <label>Materials: {materials.map(m => MATERIAL[m]).join(' / ')}</label>
            <div className="form-input">
              {MATERIAL.map((m, i) => {
                const props = {
                  type: 'checkbox',
                  name: 'material',
                  value: i,
                  onChange: this.updateMaterial.bind(this, i)
                }
                if (materials.indexOf(i) >= 0) {
                  props.checked = true;
                }
                return (
                  <span className="pure-checkbox" key={i}>
                    <input {...props} /> <span onClick={props.onChange}>{m}</span>
                  </span>
                )
              })}
            </div>
          </div>
          <div className="form-item">
            <label>Forge Class: {FORGER[forger]}</label>
            <div className="form-input">
              {FORGER.map((f, i) => {
                const props = {
                  type: 'radio',
                  name: 'forger',
                  value: i,
                  onChange: this.updateForger.bind(this, i)
                }
                if (forger === i) {
                  props.checked = true;
                }
                return (
                  <span className="pure-radio" key={i}>
                    <input {...props} /> <span onClick={props.onChange}>{f}</span>
                  </span>
                )
              })}
            </div>
          </div>
        </section>
        <section className="summary">
          <p className="price">Price: {price} ETH</p>
          <button className="btn" onClick={this.toggleModal}>Confirm</button>
        </section>
        {this.state.showModal && <div className="overlay">
          <Payment {...paymentProps} />
        </div>}
      </div>
    )
  }
}

export default Forge
