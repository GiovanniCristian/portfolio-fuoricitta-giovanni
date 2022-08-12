import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faCakeCandles} from "@fortawesome/free-solid-svg-icons"
import {faMap} from "@fortawesome/free-solid-svg-icons"
import {faPhone} from "@fortawesome/free-solid-svg-icons"
import {faLock} from "@fortawesome/free-solid-svg-icons"

const Section = () => {
  return (
    <div className="container icon-section">
      <div className="row">
        <div className="icon-list mt-5">
            <FontAwesomeIcon className="icons fa-2x" icon={faUser}
            
            />
            <FontAwesomeIcon className="icons fa-2x" icon={faEnvelope} 
            
            />
            <FontAwesomeIcon className="icons fa-2x" icon={faCakeCandles} 
            
            />
            <FontAwesomeIcon className="icons fa-2x" icon={faMap} 
            
            />
            <FontAwesomeIcon className="icons fa-2x" icon={faPhone} 
            
            />
            <FontAwesomeIcon className="icons fa-2x" icon={faLock} 
            
            />
        </div>
      </div>
    </div>
  )
}

export default Section
