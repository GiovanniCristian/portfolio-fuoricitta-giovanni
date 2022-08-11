import React from 'react'
import Typed from 'react-typed'
import me from '../me.jpg'

const Header = () => {
  return (
<div className="container-fluid header img-fluid text-center">
    <div className="container py-5 text-center">
        <h1 className="display-2 mb-2 font-weight-bold text-yellow">My Portfolio</h1>
        <Typed 
            className="typed-text display-6"
            strings={["This is my Project", "My Goal", "My Attitude", "My Future" , "Hope You Like It!"]}
            typeSpeed={40}
            backSpeed={60}
            loop
        />
    </div>
    
    <div className="box my-2 mx-auto">
        <div className="content">
            <img className="img-fluid" src={me} alt="me" />
        </div>
    </div>

</div>
  )
}

export default Header
