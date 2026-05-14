import React from 'react'

const App = () => {


  function inputName(value) {
    console.log("Enter Your Name", value);
  }


  function inputPassword(value) {
    console.log("Enter Your Password", value);
  }

  return (
    <div className='w-screen h-screen bg-purple-300 flex items-center justify-center shadow-inner'>
      <div className='w-[400px] h-[400px] bg-purple-100 rounded-lg shadow-inner p-6 flex flex-col justify-center space-y-4'>
        <div className='flex flex-col space-y-2'>
          <label htmlFor="name" className='text-purple-900 font-medium'>Name</label>
          <input 
            type="text" 
            id="name" 
            onChange={(ele) => {
              console.log(ele.target.value);
            }}
            placeholder='Enter Your name' 
            className='px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80'
          />
        </div>

        <div className='flex flex-col space-y-2'>
          <label htmlFor="password" className='text-purple-900 font-medium'>Password</label>
          <input 
            type="password" 
            id="password" 
           onChange={(ele) => {
              console.log(ele.target.value);
            }}
            placeholder='Enter Your password' 
            className='px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80'
          />
        </div>

        <div className='flex flex-col space-y-2'>
          <button className='w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default App