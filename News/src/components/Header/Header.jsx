import "./Header.css"

import React from 'react'

const Header = () => {
  return (
    <>
    <div className="container-fluid d-flex flex-column align-items-center header">
      <a href="/index"><h1>News</h1></a>
      <div className="line"></div>
    </div>
    </>
  )
}

export default Header
