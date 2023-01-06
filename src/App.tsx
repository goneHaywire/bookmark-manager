import React from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='grid grid-cols-[1fr_3fr] grid-rows-1 h-screen'>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default App
