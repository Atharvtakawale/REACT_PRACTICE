import React from 'react'

const Body = () => {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <div className="w-[50%] h-screen bg-gray-300 flex items-start justify-center">
          <div className='w-[70%] h-[25%] bg-amber-300 flex justify-around items-center'>
              <img src="./src/assets/Front.jpg" alt="" className="w-23 h-23 rounded-full object-cover"/>
              <div className='gap-2'>
                <h1 className="text-lg font-bold">PRESENTATION DESIGN</h1>
                <h4 className="text-sm text-gray-700">One Minute B tg: @SashaS45</h4>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Body
