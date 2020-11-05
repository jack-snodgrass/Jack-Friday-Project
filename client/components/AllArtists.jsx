
import React from 'react'
import { Route, Link } from 'react-router-dom'
import genres from '../../data/genres'
import Artist from './Artist'

// Create Post template to be used in AllPosts parent instance of posts
const AllArtists = props => {
  console.log('All Artist props:', props)
  return (
    <div className='all_artists'>
      <h2>{props.match.params.genre}</h2>
      <ul>
        {genres[props.match.params.genre].map(genre => {
          return <Artist key={genre.id} parent={props.match.params.genre} name={genre.name} description={genre.description}/>
        }
        )}
      </ul>
    </div>
  )
}
export default AllArtists
