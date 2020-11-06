import React from 'react'
import { Route, Link } from 'react-router-dom'
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
    <div className='description'>
      <img src={`/images/${props.match.params.name}.jpg`}></img>
      <h2>{props.match.params.name}</h2>
      <p> {genre.description}</p>
      <h3>Songs</h3>
      <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3BqHI5fuXWV" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  )
}
export default Description
