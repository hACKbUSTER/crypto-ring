import React, { Component } from 'react'
import { RING } from '../store/constants'
import Ring from './ring'
import Web3 from 'web3'

class Witness extends Component {
 constructor(props) {
   super(props)
   this.state = {
     ring: RING,
   };
 }

 componentWillMount() {
   // TODO: load ring object here
 }

 render() {
    var provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545')
    var web3 = new Web3(provider)
    web3.eth.defaultAccount = web3.eth.accounts[0]

   return (
     <div>
       <section>
         <h2>your address</h2>
         <div className="avatar-row">
           <div className="avatar">
             <img alt="avatar" src="https://s3.amazonaws.com/cdn-live.sketch.cloud/default_avatars/m/2.png" />
           </div>
           <pre className="address highlight">{web3.eth.defaultAccount}</pre>
         </div>
       </section>
       <section>
         <h2>my ring</h2>
         <Ring ring={this.state.ring} useButton={false} />
       </section>
     </div>
   )
 }
}

export default Witness
