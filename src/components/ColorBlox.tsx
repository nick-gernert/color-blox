import { useState } from 'react'
import Grid from './Grid'
import { checkNeighbors, createGrid, clearHover, removeBlox } from '../gameHelpers'
import { Tile } from '../models/Tile'

const ColorBlox: React.FC = () => {
  const [movesAvailable, setMovesAvailable] = useState(true)

  const [grid, setGrid] = useState(createGrid())

  const handleMouseEnter = (tile: Tile) => {
    console.log(tile)
    setGrid(checkNeighbors(grid, tile))
  }

  const handleMouseLeave = () => {
    setGrid(clearHover(grid))
  }

  const handleClick = (tile: Tile) => {
    if (!movesAvailable) return
    setGrid(removeBlox(grid, tile))
  }
  console.log('re-render')
  return (
    <div className="container mx-auto grid content-center justify-center h-full">
      <Grid
        grid={grid}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />
    </div>
  )
}

export default ColorBlox
