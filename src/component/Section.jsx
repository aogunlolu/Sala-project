import React from 'react'
import Headset from '../Asset/oculus-rift-s-virtual-reality-headset@2x.png'
import SectionCard from './SectionCard'
import Degree from '../Asset/360-degrees.png'
import music from '../Asset/music.png'
import pc from '../Asset/devices.png'



const data = [
  {
    id: 1,
    image: Degree,
    title: '3600 Virtual Reality Glasses',
    content: 'It is a long established fact that a reader',
  },
  {
    id: 2,
    image: music,
    title: 'Interactive VR Simulator',
    content: 'It is a long established fact that a reader',
  },
  {
    id: 3,
    image: pc,
    title: 'Tablet, PC Control System',
    content: 'It is a long established fact that a reader',
  },
];


const Section = () => {
  return (
      <>
     <div className='section1'>
       <div className='col-md-6 offset-md-3 text-center'>
          <h4>Why is it best</h4>
          <h1>The only comprehensive, simple and secure content platform that works with most smartphones.</h1>
       </div>
       <div className="row main-section">
         <div className="col-md-4 offset-md-1">   
           <h2>Core features</h2>
           <p>It is a long established fact that a reader will be distracted by the readable content</p>

           {data.map(({ id, image, title, content }) => (
              < div className="row">
                <SectionCard key={id} title={title} content={content} image={image} />
              </ div>
            ))}
         </div>
         <div className='col-md-7 '> 
         <div className="row main-sectionl-r">
         <div className='col-md-7'>
              <img src={Headset} alt="oculus-rift-s-virtual-headset"  width="100%"></img>
            </div>
            <div className='col-md-5 main-sectionr'>
            </div>
         </div>        
         </div> 
       </div>
     </div>

      </>
    
  )
}

export default Section

      {/* <div className='section1'>
        <h4>Why is it best</h4>
        <h1>The only comprehensive, simple and secure content platform that works with most smartphones.</h1>
      </div>
      <div className='main-section'>
        <div className='main-sectionl'>
        <div>
          <h2>Core features</h2>
          <h4>It is a long established fact that a reader will be distracted by the readable content</h4>
        </div>
        <div>
          <div><i class="fa-regular fa-laptop-mobile"></i></div>
          <div>
            <h2>3600 Virtual Reality Glasses</h2>
          <h4>It is a long established fact that a reader</h4>
          </div>   
        </div>
        <div>
          <div><i class="fa-regular fa-laptop-mobile"></i></div>
          <div>
            <h2>Interactive VR Simulator</h2>
            <h4>It is a long established fact that a reader</h4>
          </div>      
        </div>
        <div>
          <div><i class="fa-regular fa-laptop-mobile"></i></div>
          <div>
            <h2>Tablet, PC Control System</h2>
            <h4>It is a long established fact that a reader</h4>
          </div>    
        </div>
        </div> 
        
        <div className='main-sectionr'> 
          <img src={Headset} alt="oculus-rift-s-virtual-headset" />
        </div>
      </div> */}
      {/* col-md-5 */}

