import React from 'react'
import imgHome from '../img/luxury.png'
import img1 from '../img/pic1.png'
import img2 from '../img/pic2.png'
import img3 from '../img/pic3.png'
import img4 from '../img/pic4.png'

export default function(props) {
  return (
    <div>
      <img src={imgHome} className="home-pic" role="presentation">
      </img>
      <h1 className="home-title">Declare to the world, we are made for each other</h1>
      <a href="/mine">
        <button className="btn home-button">Start</button>
      </a>
      <h2 className="home-subtitle">View Collection</h2>
      <h3 className="home-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
      <img src={img1} role="presentation" className="home-subpics"/>
      <img src={img2} role="presentation" className="home-subpics"/>
      <img src={img3} role="presentation" className="home-subpics"/>
      <img src={img4} role="presentation" className="home-subpics"/>
    </div>
  )
}
