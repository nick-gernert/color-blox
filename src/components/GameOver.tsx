import React from 'react'

const GameOver = () => {
  return (
    <div className="grid justify-center fixed inset-0 content-center h-screen w-screen bg-black/20">
      <div className="text-6xl bold p-20 border-4 bg-gray-200 border-gray-400 rounded">Game Over!</div>
    </div>
  )
}

export default GameOver
