import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import AllArtists from './AllArtists'
import Description from './Description'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'

const App = () => {
  return (
    <>
      <div>
        <Header/>
        <Banner/>
      </div>
      <div className='main'>
        <div>
          <Nav />
        </div>
        <div className='displayinline'>
          <Route path='/info/:genre/:name' component={Description} />
          <Route path='/genre/:genre' component={AllArtists} />
          <Route exact path='/' component={Home} />
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default App
