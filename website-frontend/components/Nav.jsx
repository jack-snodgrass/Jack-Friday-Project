import React from 'react'
import Genre from './Genre'
import genres from '../../data/genres'

const genresKeys = Object.keys(genres)
const Nav = () => {
  // console.log('Nav genre:', JSON.stringify(genresKeys))
  return (
    <div className= 'navStyle'>
      <h2>Genre</h2>
      <ul className='genre_ul'>
        {genresKeys.map(genre => {
          return <Genre key={genre} name={genre}/>
        }
        )}
      </ul>
    </div>
  )
}

export default Nav
