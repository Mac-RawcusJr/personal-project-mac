import React from 'react'

import Nav from './Nav'
import SnakeGame from './SnakeGame'

const Home = () => {
  return (
    <>
      <Nav />
      <div className="columns">
        <div className="column has-text-centered">User info widget</div>
        <div className="column is-three-fifths has-text-centered">
          Center Column for game displays
          <div className="tile is-ancestor block">
            <div className="tile is-child block">
              Snake <SnakeGame />
            </div>

            <div className="tile is-child block">Game Slot 2</div>
            <div className="tile is-child block">Game Slot 3</div>
          </div>
        </div>

        <div className="column has-text-centered">Spacer</div>
      </div>
    </>
  )
}

export default Home
