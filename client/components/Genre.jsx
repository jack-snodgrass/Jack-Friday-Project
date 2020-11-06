import React from 'react'
import { Route, Link } from 'react-router-dom'

// Create Genre template to be used in Nav to display link of genre keys
const Genre = props => {
  // console.log('genre props:', props)
  return (

    <div className='genre'>
      <li><button className="myButtons"><Link to={`/genre/${props.name}`}>{props.name}</Link></button></li>
    </div>
  )
}
export default Genre
