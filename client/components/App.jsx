import React from 'react'
import { Link, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import AllArtists from './AllArtists'
import Description from './Description'

const App = () => {
  return (
    <>
      <div>
        {/* <img src={`/images/${props.match.params.name}.jpg`}></img> */}

        <h1 className="home_header"><img className="header_pic" src="images/Logo.png" alt="Beatles Logo"></img><Link to='/'>    Welcome to BEATLE TUNES!!</Link></h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Nav />
        <Route path='/info/:genre/:name' component={Description} />
        <Route path='/genre/:genre' component={AllArtists} />
        <Route exact path='/' component={Home} />
      </div>
    </>
  )
}
export default App
