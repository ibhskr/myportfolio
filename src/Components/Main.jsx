import React from 'react'
import profile from './profile.png'
import "./Main.css"
function Main() {
  return (
    <div className='main'>
      <div className='main-1'>
        <p>Hi, This is Bhaskar</p>
      </div>
      <div className='main-2'>
        <img src={profile} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Main