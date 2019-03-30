import React from 'react'
import './Logo.css'

const Logo = () => {
  return (
    <div className="logoOuterContainer">
      <div className="logoInnerContainer">
        <div className="textAnimationOuterContainer">
          <div className="colorPlane"></div>
          <div className="jeffText">
            <h1>Jeff's</h1>
          </div>
        </div>
        <div className="granolaText">
          <h1>GRANOLA</h1>
        </div>
        <div className="allProfitsText">
          <h1>ALL PROFITS TO YOUR FAVORITE CHARITIES</h1>
        </div>
        <svg className="box" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="340px" height="333px" viewBox="0.0 0.0 960.0 720.0" enableBackground="new 0 0 340 333">
          <path className="path" fill="none" stroke="#000000" strokeWidth="4" strokeMiterlimit="10" d="m150.3727 210.26509l602.77167 0l0 373.38586l-602.77167 0z"/>
        </svg>
      </div>

    </div>
  )
}

export default Logo
