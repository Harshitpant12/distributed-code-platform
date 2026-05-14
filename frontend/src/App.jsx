import React, { useEffect } from 'react'
import socket from './socket'

function App() {

  const joinRoom = () => {
    socket.emit("join-room", "room123")
  }

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected: ", socket.id);
    })

    return () => {
      socket.off("connect");
    }
  }, [])
  return (
    <div className='bg-amber-400'>
      App is live
      <button className='block bg-red-400 text-black' onClick={joinRoom}>
        Join Room
      </button>
    </div>
  )
}

export default App