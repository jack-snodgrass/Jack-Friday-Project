import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <h1 className="home_header">
        <img className="header_pic" src="images/LogoMusic.png" alt="Music Logo"></img>
        <Link to='/'>My Melodies</Link></h1>
    </>
  )
}
export default Header
