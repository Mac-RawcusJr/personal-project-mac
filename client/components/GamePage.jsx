import React from 'react'
import SnakeGame from './SnakeGame'
import { useParams } from 'react-router-dom'

const GamePage = () => {
  const params = useParams()

  const gameId = params.gameId
  console.log(gameId)

  return (
    <>
      <SnakeGame />
    </>
  )
}

export default GamePage
