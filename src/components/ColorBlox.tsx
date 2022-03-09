import { useState, useEffect } from 'react'
import Grid from './Grid'
import GameOver from './GameOver'
import {
  checkNeighbors,
  createGrid,
  clearHover,
  removeBlox,
  checkAvailableMoves,
} from '../gameHelpers'
import { Tile } from '../models/Tile'

const ColorBlox: React.FC = () => {
  const [movesAvailable, setMovesAvailable] = useState(true)

  const [grid, setGrid] = useState(createGrid())

  useEffect(() => {
    setMovesAvailable(checkAvailableMoves(grid))
  }, [grid])

  const handleMouseEnter = (tile: Tile) => {
    setGrid(checkNeighbors(grid, tile))
  }

  const handleMouseLeave = () => {
    setGrid(clearHover(grid))
  }

  const handleClick = () => {
    if (!movesAvailable) return
    setGrid(removeBlox(grid))
  }
  
  return (
    <>
      {!movesAvailable && <GameOver />}
      <div className="container mx-auto grid content-center justify-center h-full">
        <Grid
          grid={grid}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />
      </div>
    </>
  )
}

export default ColorBlox
