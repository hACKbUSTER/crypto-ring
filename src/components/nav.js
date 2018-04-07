import React from 'react'
import { networkName } from "../utils/getWeb3.js";

export default function(props) {
  const routes = [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/forge',
      name: 'artisan',
    },
    {
      path: '/market/sale',
      name: 'marketplace',
    },    
    {
      path: '/mine',
      name: 'my ring',
    }
  ];

  const getNetworkColor = network => {
    console.log(network);
    if(network === 0) { return <h4 className="network-status-fail">{networkName(props.network)}</h4>; }
    else { return <h4 className="network-status-normal">{networkName(props.network)}</h4>; }
  }

  return (
    <header>
      <p>
      {getNetworkColor(props.network)}
      </p>
      <nav className="menu">
        <ul>
          {routes.map((r, i) => {
            const className = r.path === props.history.location.pathname ? 'active' : '';
            return <li key={i} className={className}><a href={r.path}>{r.name}</a></li>;
          })}
        </ul>
      </nav>
    </header>
  )
}