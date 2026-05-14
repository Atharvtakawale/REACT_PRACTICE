import React from 'react'

const App = () => {


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        handleSubmit(e);
      }}>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App