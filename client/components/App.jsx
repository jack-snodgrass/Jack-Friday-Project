import React from 'react'
import { HashRouter as Link, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import AllArtists from './AllArtists'
import Description from './Description'

const App = () => {
  return (
    <>
      <h1>Welcome to BEATLE TUNES!!</h1>
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
