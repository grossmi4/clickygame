import React from 'react'

const Navbar = props => (
  <nav>
    <div className="nav-wrapper blue-grey darken-3">
      <a href='/' className="brand-logo center">Click the Numbers...</a>
      <ul>
        <li><a href="/">Current Score: {props.currentScore}</a></li>
        <li><a href="/">HighScore: {props.highScore}</a></li>
      </ul>
    </div>
  </nav>
)

export default Navbar