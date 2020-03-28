import React from 'react';
// import { connect } from 'react-redux'

import {
  pickFrame,
} from '../../../DataFlow/actions'

import './Frame.css'

export interface IFrame {
  idx: number
  text: string
  active?: boolean
  // index: number
}

const log = console.log

const FrameComp: React.FC<any> = (props: any) => {
  // console.log('props', props)
  // console.log('props.frame', props.frame)
  // const chunks = props.message.chunks!.map( (c: IChunk) => {
  //   return <Chunk freq={c.freq } en={c.en}></Chunk>
  // })

  const pickOneFrame = () => {
    log('pickFrame', props.frame.idx)
    const payload = {idx: props.frame.idx}
    props.dispatch(pickFrame(payload))
  }

  const klass = props.frame.active ? 'frame active' : 'frame'

  return (
    <div className={ klass } onClick={ pickOneFrame }>
      <span className='idx'>
        { props.frame.active ? '√' : 'x' }
        { props.frame.idx }
      </span>
      <div>
        { props.frame.text }
      </div>
    </div>
  )
};

// const mapStateToProps = (state: any, dispatch: any) => {
  // console.log('mapping', state, 'dispatch', dispatch)
  // return {
  //   state,
  //   dispatch
  // }
// }

// const mapDispatch = (dispatch: any) => {
//   return dispatch
// }

// const Frame = connect(
//   mapStateToProps,
//   mapDispatch
// )(FrameComp)

// export { Frame }

export { FrameComp as Frame }
