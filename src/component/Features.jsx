import React from 'react'
import playicon from '../Asset/play-icon@2x.png'
import oculusCasing from '../Asset/oculus-headset-case.png'

const Features = () => {
  return (
      <>
     
    <div className='container'>
        <div>
            <h1>Bring your couch to the front row</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content</p>
        </div>
        <div>
            <img src={playicon} alt="play" width='65px'/>
            <p>Watch video</p>
        </div>   
    </div>  
    <div className='specification'>
        <div>
            <h2>Specifications</h2>
            <p>It is a long established fact that</p>
            <img src={oculusCasing} alt="oculusCasing" width="60%"/>
        </div>


    </div>
    </>
  )
}

export default Features