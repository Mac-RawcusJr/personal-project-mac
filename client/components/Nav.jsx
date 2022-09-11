import React from 'react'
import SnakeGame from './SnakeGame'

const Nav = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbar" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/">
                Games
              </a>

              <div className="navbar-dropdown">
                <button id="snake" className="navbar-item">
                  Snake
                </button>
                <a className="navbar-item" href="/">
                  Whack a Mole
                </a>
                <a className="navbar-item" href="/">
                  Memory Game
                </a>
                <a className="navbar-item" href="/">
                  Tic Tac Toe
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
