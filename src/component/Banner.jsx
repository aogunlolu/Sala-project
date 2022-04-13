import React from 'react'
import NicePng from '../Asset/landingpage-img.png'
// import Oval2 from '../Asset/oval@2x.png'

const Banner = () => {
  return (
      <>         
    <main>
    <div className='main-l'>
        <h5><span>Oculus Quest</span></h5>
        <h1>Oculus Go Standalone Virtual Reality Headset - 32GB </h1>
        <h4>User controlled playback of 360° video content</h4>
        <button className="btn2 btn-primary btn-lg" type="submit" >Buy Now</button>
    </div>
    <div className='main-r'>
      {/* <img src={Oval2} alt="" />
      <img src={Oval2} alt="" /> */}
      <img src={NicePng} alt="landingpage-img" />
    </div>       
</main>
</>
  )
}

export default Banner

 {/* <div className='banner-bg'>
        <div className='container'>
          <div className='row banner'>
            <div className='col-md-4 offset-1'>

            </div>

          </div>
        </div>
      </div> */}