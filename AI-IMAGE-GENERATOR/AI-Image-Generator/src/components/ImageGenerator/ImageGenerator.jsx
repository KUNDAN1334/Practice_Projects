import React from 'react'
import default_image from '../../assets/what-can-AI-generate-today-1536x960.jpg'
import './ImageGenerator.css'
const ImageGenerator = () => {
  return (
    <div className='ai-img-generator'>
      <div className="header">
        <h1>What can <span>AI</span> generate today?</h1>
      </div>
      <div className="image-container">
        <div className="img"><img src={default_image} alt="loading.." /></div>
        </div>

<div className="search-box">
  <input type="search" className="search-input" id="" placeholder='Describe what you want to see' />
 <div className="generate-btn">Generate</div>
</div>
        
    </div>
  )
}

export default ImageGenerator