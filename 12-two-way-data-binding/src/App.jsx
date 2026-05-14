import React from 'react'

const App = () => {

  const [name, setName] = React.useState('')
  
  const submitHandler = (e) => {
    e.preventDefault()
    setName('')
  }

  return (
    <div className="flex flex-col gap-2">
      <input type="text" 
         placeholder="Enter your name" 
         value={name}
         onChange={(e) => {
           setName(e.target.value)
         }}
         className="border border-gray-300 rounded px-2 py-1"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default App