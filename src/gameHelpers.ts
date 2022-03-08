import { Tile } from './models/Tile'

export const GRID_WIDTH = 10
export const GRID_HEIGHT = 10

const COLORS = ['yellow', 'red', 'green', 'blue']

export const createGri = () =>
  Array.from(Array(GRID_HEIGHT), () =>
    new Array(GRID_WIDTH).fill([COLORS[Math.floor(Math.random() * 4)], 'clear'])
  )

export const createGrid = (): Tile[][] => {
  const arr: Tile[][] = [...Array(10)].map((e) =>
    Array(10).fill({ color: 'gray', hover: false })
  )

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      arr[i][j] = {
        color: COLORS[Math.floor(Math.random() * 4)],
        row: i,
        col: j,
        hover: false,
      }
    }
  }

  return arr
}

export const removeBlox = (grid: Tile[][], tile: Tile) => {
  const newGrid = grid.map((row) => row.map((col) => col))

  newGrid.map((row) =>
    row.map((tile) => {
      if (tile.hover) {
        tile.color = 'gray'
      }
    })
  )

  bubbleGrays(newGrid)

  return newGrid
}

const bubbleGrays = (grid: Tile[][]) => {
  // grid.forEach(row => {
  //   row.forEach(block => {
  //     if (block.color === 'gray' && grid[block.row][block.col-1].color !== 'gray') {
  //       block
  //     }
  //   })
  // })
}

export const checkNeighbors = (grid: Tile[][], tile: Tile) => {
  const newGrid = grid.map((row) => row.map((col) => col))
  
  if (tile.color === 'gray') return newGrid

  checkPlus(newGrid, tile)

  return newGrid
}

export const clearHover = (grid: Tile[][]) => {
  const newGrid = grid.map((row) => row.map((col) => col))

  newGrid.map((row) => row.map((tile) => (tile.hover = false)))

  return newGrid
}

const checkPlus = (grid: Tile[][], tile: Tile) => {
  const { color, row, col } = tile

  if (
    row !== 0 &&
    !grid[row - 1][col].hover &&
    grid[row - 1][col].color === color
  ) {
    grid[row - 1][col].hover = true
    grid[row][col].hover = true
    checkPlus(grid, grid[row - 1][col])
  }
  if (
    row !== grid.length - 1 &&
    !grid[row + 1][col].hover &&
    grid[row + 1][col].color === color
  ) {
    grid[row + 1][col].hover = true
    grid[row][col].hover = true
    checkPlus(grid, grid[row + 1][col])
  }
  if (
    col !== 0 &&
    !grid[row][col - 1].hover &&
    grid[row][col - 1].color === color
  ) {
    grid[row][col - 1].hover = true
    grid[row][col].hover = true
    checkPlus(grid, grid[row][col - 1])
  }
  if (
    col !== grid[row].length - 1 &&
    !grid[row][col + 1].hover &&
    grid[row][col + 1].color === color
  ) {
    grid[row][col + 1].hover = true
    grid[row][col].hover = true
    checkPlus(grid, grid[row][col + 1])
  }
}
