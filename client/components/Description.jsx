import React from 'react'
import { Route, Link } from 'react-router-dom'
import genres from '../../data/genres'

// Create Post template to be used in AllPosts parent instance of posts
const Description = props => {
  const genre = genres[props.match.params.genre].find(genre => genre.name === props.match.params.name)
  const songs = genre.songs
  const url = genre.url
  const follow = genre.follow
  // console.log(JSON.stringify(obj))
  // return <Description key={genre.id} name={genre.name} description={genre.description}/>

  // )
  console.log('description props:', props, props.match.params.url)
  return (
    <div className='description'>
      <br></br>
      <img className='artistImage' src={`/images/${props.match.params.name}.jpg`}></img>
      <h2 className='summary'>{props.match.params.name}</h2>
      <p className='summary'> {genre.description}</p>
      <h3>Songs</h3>
      <iframe src={url} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <iframe src={follow} width="300" height="56" scrolling="no" frameBorder="0" style={{ border: 'none', overflow: 'hidden' }} allowtransparency="true"></iframe>
    </div>
  )
}
export default Description
