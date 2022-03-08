import React from 'react'
import { Tile } from '../models/Tile'

type TileProps = {
  tile: Tile
  onClick: (tile: Tile) => void
  onMouseEnter: (tile: Tile) => void
  onMouseLeave: () => void
}

const Block: React.FC<TileProps> = ({
  tile,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  if (tile.color !== 'gray') {
    return (
      <div
        className={`h-16 w-16 cursor-pointer transition-colors rounded-full bg-${
          tile.color
        }-${tile.hover ? '600' : '400'}`}
        onClick={() => onClick(tile)}
        onMouseEnter={() => onMouseEnter(tile)}
        onMouseLeave={onMouseLeave}
      ></div>
    )
  } else {
    return <div className={`h-16 w-16 rounded-3xl bg-${tile.color}-400`}></div>
  }
}

export default Block
