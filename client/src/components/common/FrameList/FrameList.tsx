import React from 'react';
import { connect } from 'react-redux'

import { Frame, IFrame} from '../Frame/Frame'
import './FrameList.css'

const NUM_FRAMES = 10

class FrameList extends React.Component<any, any> {

  constructor(props: any) {
    super(props)

    // @ts-ignore
    // const initState = store.getState() // .frameReducer.frames
    console.log('props.frames', props.frames)

    this.state = {
      totalFrames: NUM_FRAMES,
      frameData: props.frames,
      currentSlide: 0
    }
    // this.addSlide = this.addSlide.bind(this)
  }

  makeFrames(max: number) {
    let frameData = []
    for (let i = 0; i < max; i++) {
      frameData.push({text: `frame ${i}`})
    }
    return frameData
  }

  renderFrames() {
    return this.props.frames.map(( frame: IFrame, idx: number) => {
      const key = 'frame-' + idx
      frame.idx = idx
      return (<Frame key={ key } frame={ frame } dispatch={ this.props.dispatch }/> )
    })
  }

  render() {
    console.log('render framelist', this.props.frames.length)
    return (
      <div className='frame-list' >
        { this.renderFrames() }
      </div>
    )
  }

};

const mapStateToProps = (state: any) => {
  return {
    frames: state.frames
  }
}


export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(FrameList)

