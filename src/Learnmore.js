import React, { Component } from 'react'
import Background from './img/background.png';
import './App.css'
import Footer from './components/footer'

var sectionStyle = {
  backgroundImage: "url("+Background+")"
};

class Learnmore extends Component {
  render() {
    return (
        <div>
          <div className="App" style={sectionStyle}>
          <Footer/>
          </div>
        </div>
      );
  }
}

export default Learnmore