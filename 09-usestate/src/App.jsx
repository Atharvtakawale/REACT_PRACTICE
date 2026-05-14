import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  const handleDecrease = () => {
    setCount(count - 1)
  }

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleJumpBy5 = () => {
    setCount(count + 5)
  }

  return (
    <div>
      <div>
          {count}
      </div>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleJumpBy5}>Jump By 5</button>
    </div>
  )
}

export default App