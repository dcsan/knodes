import React from 'react';

// https://github.com/express-labs/pure-react-carousel
import {
  CarouselProvider, Slider, Slide,
  // ButtonBack, ButtonNext
} from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './Swipey.css'

const NUM_SLIDES = 15

const makeSlide = (counter: number) => {
  const key = `slide-${ counter }`

  return (
    <Slide
      key={ key }
      index={ counter }
    >
      <div className='one-slide'>
        <div>Slide { counter }</div>
        { counter === 2 && detail() }
      </div>
    </Slide>
  )
}

const detail = () => {
  return (

    <CarouselProvider
      key='internal'
      naturalSlideWidth={ 100 }
      naturalSlideHeight={ 30 }
      currentSlide={0}
      totalSlides={ 5 }
      visibleSlides={ 1 }
      orientation='horizontal'
      // className='swipey-outer'
      dragStep={ 1 }
    >

      <Slider>
        <Slide className='slide-detail' key='int-1' index={ 1 }>internal</Slide>
        <Slide className='slide-detail' key='int-2' index={ 2 }>internal</Slide>
        <Slide className='slide-detail' key='int-3' index={ 3 }>internal</Slide>
        <Slide className='slide-detail' key='int-4' index={ 4 }>internal</Slide>
        <Slide className='slide-detail' key='int-5' index={ 5 }>internal</Slide>
      </Slider>

    </CarouselProvider>
  )

}


export default class extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
    const slides = this.makeSlides(NUM_SLIDES)
    this.state = {
      totalSlides: NUM_SLIDES,
      slides,
      currentSlide: 0
    }
    this.addSlide = this.addSlide.bind(this)
  }

  makeSlides(max: number) {
    let slides = []
    let c = 0
    for (c = 0; c < max; c++) {
      slides.push(makeSlide(c))
    }
    // slides[3] = detail()
    return slides
  }

  addSlide() {
    let totalSlides = this.state.totalSlides
    let slide = makeSlide(totalSlides++)
    let slides = this.state.slides
    slides.push(slide)
    this.setState({
      slides,
      totalSlides,
      currentSlide: totalSlides-2
    })
  }

  wheel(evt: any) {
    // console.log('wheel', evt.deltaY)
    let currentSlide = this.state.currentSlide
    if (evt.deltaY < 0) {
      currentSlide--
    } else {
      currentSlide++
    }
    if (currentSlide < 0) currentSlide = 0
    if (currentSlide >= this.state.totalSlides) currentSlide = this.state.totalSlides - 1
    this.setState({currentSlide})
  }

  render() {

    return (

      <div className='swipey-outer' onWheel = {(e) => this.wheel(e)} >

      <CarouselProvider
        naturalSlideWidth={ 100 }
        naturalSlideHeight={ 50 }
        totalSlides={ this.state.totalSlides }
        visibleSlides={ 5 }
        currentSlide = {this.state.currentSlide}
        orientation='vertical'
        className='swipey-outer'
          dragStep={ 1 }
        >

        <Slider>
          { this.state.slides }
        </Slider>

      </CarouselProvider>
        </div>

    );
  }
}