import React from 'react'
// import { Route, Link } from 'react-router-dom'
import genres from '../../data/genres'

// Create Post template to be used in AllPosts parent instance of posts
const Description = props => {
  const genre = genres[props.match.params.genre].find(genre => genre.name === props.match.params.name)
  const songs = genre.songs
  // console.log(JSON.stringify(obj))
  // return <Description key={genre.id} name={genre.name} description={genre.description}/>

  // )
  console.log('description props:', props)
  return (
    <div className='col-3 description'>
      <h2>{props.match.params.name}</h2>
      <p> {genre.description}</p>
      <h3>Songs</h3>
      <ul>
        {songs.map(song => {
          return <li key={song}>{song}</li>
        }
        )}

      </ul>
    </div>
  )
}
export default Description
