import React from 'react'
import { Link } from 'react-router-dom'

// Create Artist template to be used in AllArtists parent
const Artist = props => {
  console.log('Artist props:', props)
  return (
    <div className='col-2 artist'>
      <li className='artist_li'><Link to={`/info/${props.parent}/${props.name}`}>{props.name}</Link></li>
    </div>
  )
}
export default Artist
