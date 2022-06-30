import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
				<span>What Technologies</span>
				<span>Are Used?</span>
				<br/>
				<span>Take a look. It is used the most recent technologies.</span><br/>
				<button className='btn-main-offer'>Download CV</button>
				<div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>
			</div>
			<div className="cards">
				I-m the right side
			</div>
    </div>
  )
}

export default Services