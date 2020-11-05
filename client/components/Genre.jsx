import React from 'react'
import { Route, Link } from 'react-router-dom'

// Create Genre template to be used in Nav to display link of genre keys
const Genre = props => {
  // console.log('genre props:', props)
  return (

    <div className='col-1 genre'>
      <li><Link to={`/genre/${props.name}`}>{props.name}</Link></li>
    </div>
  )
}
export default Genre
