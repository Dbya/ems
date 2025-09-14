import React from 'react'

const Emptasklist = () => {
  return (
    <div className='flex justify-between mt-10 gap-5'> 
      <div className=' w-[45%] bg-red-400 rounded-xl py-7 px-10'>
        <h2 className='text-2xl  font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' w-[45%] bg-blue-400 rounded-xl py-7 px-10'>
        <h2 className='text-2xl  font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' w-[45%] bg-green-400 rounded-xl py-7 px-10'>
        <h2 className='text-2xl  font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' w-[45%] bg-yellow-400 rounded-xl py-7 px-10'>
        <h2 className='text-2xl  font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default Emptasklist
