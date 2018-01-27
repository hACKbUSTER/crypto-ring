import React from 'react'

export default function(props) {
  const routes = [
    {
      path: '/mine',
      name: 'my ring',
    },
    {
      path: '/forge',
      name: 'artisan',
    },
    {
      path: '/market/sale',
      name: 'marketplace',
    }
  ];

  return (
    <header>
      <a href='/'><h1 className="title with-border">crypto ring</h1></a>
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
