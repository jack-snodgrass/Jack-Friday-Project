import React, { Component } from 'react'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'

class LabelCarousel extends Component {
  state = {
    activeSlideIndex: 0
  };

  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex
    })
  };

  render () {
    return (
      <>
        <section className="heroBanner2" style={{ backgroundImage: 'url(' + '/images/project/Number2.png' + ')' }}/>
        <div className="bottom-quote">
          <p className="box-text-carousel">
            <em>One good thing about music, when it hits you, you feel no pain. – <strong>Bob Marley</strong></em>
          </p>
        </div>
        <p className="box-text-title">
          <strong>Featured labels</strong>
        </p>
        <span className="box box-break-line ml-6 mr-6"></span>
        <div className="box box-carousel mb-6  has-text-centered">
          <p className="box-text-carousel">
            <strong>Select from a list of the hottest lables right now</strong>
          </p>
          <Carousel/>
          <Link to='/institutions'><button className="button carousel-button box-text-carousel">View All Labels</button></Link>
        </div>
      </>
    )
  }
}

export default LabelCarousel
