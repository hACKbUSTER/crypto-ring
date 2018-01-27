import React from 'react'

export default function(props) {
  const routes = [
    {
      path: '/forge',
      name: 'artisan',
    },
    {
      path: '/market',
      name: 'marketplace',
    },
    {
      path: '/mine',
      name: 'my ring',
    }
  ];

  return (
    <header>
      <h1 className="title with-border">crypto ring</h1>
      <nav className="menu">
        <ul>
          {routes.map(r => {
            const className = r.path === props.history.location.pathname ? 'active' : '';
            return <li className={className}><a href={r.path}>{r.name}</a></li>;
          })}
        </ul>
      </nav>
    </header>
  )
}
