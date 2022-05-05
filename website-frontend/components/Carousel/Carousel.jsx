import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

class Carousel extends React.Component {
  render () {
    return (
      <CarouselProvider
        naturalSlideWidth={750}
        naturalSlideHeight={775}
        totalSlides={3}
      >
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <Slider>
          <Slide index={0}>
            <section className='carouselitem' style={{ backgroundImage: 'url(' + '/images/project/cyclops.jpeg' + ')' }}/>
          </Slide>
          <Slide index={0}>
            <section className='carouselitem' style={{ backgroundImage: 'url(' + '/images/project/mad.jpeg' + ')' }}/>
          </Slide>
          <Slide index={0}>
            <section className='carouselitem' style={{ backgroundImage: 'url(' + '/images/project/mousetrap.png' + ')' }}/>
          </Slide>
        </Slider>
      </CarouselProvider>
    )
  }
}

export default Carousel
