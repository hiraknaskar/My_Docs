import React from 'react'
import Bg from './Components/Bg'
import Foreground from './Components/Foreground'

function App(){
  return (
  <>
    <div className='relative w-full h-screen bg-zinc-800'>
      <Bg/>
      <Foreground/>
      
    </div>
  </>
  )
}

export default App
