import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faCakeCandles} from "@fortawesome/free-solid-svg-icons"
import {faMap} from "@fortawesome/free-solid-svg-icons"
import {faPhone} from "@fortawesome/free-solid-svg-icons"
import {faLock} from "@fortawesome/free-solid-svg-icons"
import {useState} from 'react';

const Section = () => {

  const [isHovering , setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="container icon-section">
      <div className="row">
        <div className="icon-list mt-5">
            <FontAwesomeIcon onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="icons fa-2x" icon={faUser}
            
            />
            <FontAwesomeIcon onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="icons fa-2x" icon={faEnvelope} 
            
            />
            <FontAwesomeIcon onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="icons fa-2x" icon={faCakeCandles} 
            
            />
            <FontAwesomeIcon onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="icons fa-2x" icon={faMap} 
            
            />
            <FontAwesomeIcon onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="icons fa-2x" icon={faPhone} 
            
            />
            <FontAwesomeIcon onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="icons fa-2x" icon={faLock} 
            
            />
        </div>
      </div>
    </div>
    )
}

export default Section
