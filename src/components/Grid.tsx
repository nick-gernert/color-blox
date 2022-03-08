import React from 'react'
import Block from './Block'
import { Tile } from '../models/Tile'

type GridProps = {
  grid: any[][]
  onMouseEnter: (tile: Tile) => void
  onMouseLeave: () => void
  onClick: (tile: Tile) => void
}

const Grid: React.FC<GridProps> = ({ grid, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div className="flex flex-wrap w-[640px]">
      {grid &&
        grid.map((row, rowIndex) =>
          row.map((tile, colIndex) => (
            <Block
              tile={tile}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={onClick}
              key={`${rowIndex}-${colIndex}`}
            />
          ))
        )}
    </div>
  )
}

export default Grid
