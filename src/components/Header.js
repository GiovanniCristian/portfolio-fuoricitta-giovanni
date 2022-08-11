import React from 'react'

const Header = () => {
  return (
<div className="jumbotron img-fluid">
    <div className="container py-5 text-center">
        <h1 className="display-3 font-weight-bold text-yellow">My Portfolio</h1>
        <p className="my-3">Using simple jumbotron-style component, create a nice Bootstrap 4 header with a background image.</p>
        <a href="/" role="button" className="my-5 btn btn-custom px-5">See All Features</a>
    </div>
</div>
  )
}

export default Header
