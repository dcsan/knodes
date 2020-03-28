import React from 'react';

import InputBar from '../../components/layout/InputBar'
// import Footer from '../../components/layout/Footer'



// import { createStore } from 'redux'


// const store = createStore(rootReducer)

// https://github.com/express-labs/pure-react-carousel
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './Smooth.css'

import FrameList from '../../components/common/FrameList/FrameList'

// const NUM_SLIDES = 15

// const makeSlide = (counter: number) => {
//   const key = `slide-${ counter }`

//   return (
//     <Slide
//       key={ key }
//       index={ counter }
//     >
//       <div className='one-slide'>
//         <div>Slide { counter }</div>
//         { counter === 2 && detail() }
//       </div>
//     </Slide>
//   )
// }

// const detail = () => {
//   return (

//     <CarouselProvider
//       key='internal'
//       naturalSlideWidth={ 100 }
//       naturalSlideHeight={ 30 }
//       currentSlide={0}
//       totalSlides={ 5 }
//       visibleSlides={ 1 }
//       orientation='horizontal'
//       // className='swipey-outer'
//       dragStep={ 1 }
//     >

//       <Slider>
//         <Slide className='slide-detail' key='int-1' index={ 1 }>internal</Slide>
//         <Slide className='slide-detail' key='int-2' index={ 2 }>internal</Slide>
//         <Slide className='slide-detail' key='int-3' index={ 3 }>internal</Slide>
//         <Slide className='slide-detail' key='int-4' index={ 4 }>internal</Slide>
//         <Slide className='slide-detail' key='int-5' index={ 5 }>internal</Slide>
//       </Slider>

//     </CarouselProvider>
//   )

// }


export default class extends React.Component<any, any> {

  render() {

    return (
        <div className='smooth-outer' >
          <FrameList />
          <InputBar />
        </div>
    );
  }
}
