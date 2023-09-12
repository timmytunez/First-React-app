import React from 'react'
import './main.css'

const Main = () => {
    
  return (
    <div className='main'>
        <div className='left'>
            <h3>My name is</h3>
            <h1>Akande Timothy OLawole</h1>
            <h3 style={{fontStyle:'italic'}}>I am a</h3> <span>software developer</span>
        </div>

        <div className='right'>
            <img src="./assets/boy.png" alt="" className='mainImg'/>
        </div>
    </div>
  )
}

export default Main