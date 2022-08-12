import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faCakeCandles} from "@fortawesome/free-solid-svg-icons";
import {faMap} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';

const Section = () => {

  const [label, setLabel] = useState("...");

  const handleMouseOver = (event , lbl) => {
    setLabel(lbl);
  };

  return (
  <div>
    <div className='text-center mt-5'>
          <div>
            <span className='label-custom'>
                {label}
            </span>
          </div>
      </div>


      <div className="container icon-section">
        <div className="row">
          <div className="icon-list mt-5">
              <FontAwesomeIcon onMouseEnter={event => handleMouseOver(event, 'Giovanni Cristian Marrocco')} className="icons fa-2x" icon={faUser}
              
              />
              <FontAwesomeIcon onMouseEnter={event => handleMouseOver(event, 'marroccogc@gmail.com')} className="icons fa-2x" icon={faEnvelope} 
              
              />
              <FontAwesomeIcon onMouseEnter={event => handleMouseOver(event, '17 Marzo 1995')} className="icons fa-2x" icon={faCakeCandles} 
              
              />
              <FontAwesomeIcon onMouseEnter={event => handleMouseOver(event, 'Via Macerine 87 Cervaro')} className="icons fa-2x" icon={faMap} 
              
              />
              <FontAwesomeIcon onMouseEnter={event => handleMouseOver(event, '+39 380 6422400')} className="icons fa-2x" icon={faPhone} 
              
              />
              <FontAwesomeIcon onMouseEnter={event => handleMouseOver(event, 'scolapasta17')} className="icons fa-2x" icon={faLock} 
              
              />
          </div>
        </div>
      </div>
  </div>
  )
}

function App() {
  return (
< >
  <Header />
  <Section />
</>
  )
}

export default App;
