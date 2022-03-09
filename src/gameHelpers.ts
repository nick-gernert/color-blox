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

export const removeBlox = (grid: Tile[][]) => {
  const newGrid = grid.map((row) => row.map((col) => col))

  newGrid.map((row) =>
    row.map((tile) => {
      if (tile.hover) {
        tile.color = 'gray'
      }
    })
  )

  bubbleGraysUp(newGrid)
  bubbleGraysLeft(newGrid)
  return newGrid
}

const bubbleGraysUp = (grid: Tile[][]) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      for (let k = grid.length - 1; k > 0; k--) {
        if (grid[k][i].color === 'gray') {
          const tmp = { ...grid[k][i] }
          grid[k][i] = { ...grid[k - 1][i], col: i, row: k }
          grid[k - 1][i] = { ...tmp, col: i, row: k - 1 }
        }
      }
    }
  }
}

const bubbleGraysLeft = (grid: Tile[][]) => {
  for (let i = 1; i < grid.length; i++) {
    if (grid[grid.length - 1][i].color === 'gray') {
      for (let j = 0; j < grid.length; j++) {
        for (let k = i; k > 0; k--) {
          const tmp = { ...grid[j][k] }
          grid[j][k] = { ...grid[j][k - 1], col: k, row: j }
          grid[j][k - 1] = { ...tmp, col: k - 1, row: j }
        }
      }
    }
  }
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

export const checkAvailableMoves = (grid: Tile[][]) => {
  for (let i = 0; i < GRID_HEIGHT; i++) {
    for (let j = 0; j < GRID_WIDTH; j++) {
      if (grid[i][j].color === 'gray') continue
      if (j !== GRID_WIDTH - 1 &&  grid[i][j].color === grid[i][j + 1].color) {
        return true
      }
      if (i !== GRID_HEIGHT - 1 && grid[i][j].color === grid[i + 1][j].color) {
        return true
      }
    }
  }
  return false
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
