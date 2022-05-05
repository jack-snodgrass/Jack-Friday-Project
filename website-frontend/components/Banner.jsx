import React from 'react'
import ScrollUpButton from 'react-scroll-up-button'
import { scroller } from 'react-scroll'

class Banner extends React.Component {
  // excluded React component syntax...

  scrollToList = () => {
    scroller.scrollTo('footer', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  };

  render () {
    return (
      <>
        <section className='heroBanner' style={{ backgroundImage: 'url(' + '/images/Number1.jpeg' + ')' }}>
          <div className="box box-red is-primary id-pulled-right" style={{ marginTop: '100px' }}>
            <h1 className='bannerMainText'>What are you listening to?</h1>
            <p className='bannerText '><u><a onClick={this.scrollToList}>Discover new music below!</a></u></p>
          </div>
          <div>
            <ScrollUpButton />
          </div>
        </section>
      </>
    )
  }
}

export default Banner
