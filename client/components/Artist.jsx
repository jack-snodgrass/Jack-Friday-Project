import React from 'react'
import { Link } from 'react-router-dom'

// Create Artist template to be used in AllArtists parent
const Artist = props => {
  console.log('Artist props:', props)
  return (
    <div className='artist'>
      <li><Link to={`/genre/${props.parent}/${props.name}`}>{props.name}</Link></li>
    </div>
  )
}
export default Artist
