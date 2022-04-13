import React from 'react'


const SectionCard = ({ title, image, content }) => {
  return (
    <div className="row sectionCard"> 
    <div className="col-md-2">
        <img src={image} alt="degree icon" width='50px' />
    </div> 
    <div className="col-md-9">
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
    </div>
  )
}

export default SectionCard