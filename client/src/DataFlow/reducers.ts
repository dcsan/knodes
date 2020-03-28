// import { combineReducers } from 'redux'

import { IChatState } from './initialState'
import {initialState} from './initialState'

import {
  ADD_FRAME,
  ADD_PHRASE,
  NEW_FRAME,
  PICK_FRAME,
  ADD_COUNT
} from './actions'

import { IFrame } from '../components/common/Frame/Frame'

const log = console.log

interface IAction {
  type: string
  payload: any   // not much help
}

const done = (newState: IChatState) => {
  log('newState', newState)
  return newState
}

const setActive = (frames: IFrame[], activeIdx: number) => {
  frames = frames.map( (f: IFrame) => {
    f.active = (f.idx === activeIdx)
    return f
  })
  return frames
}

function frameReducer(state = initialState, action: IAction) {
  console.log('frameReducer', action)

  // used in switch below
  let frame: IFrame
  let newState: IChatState
  let frames: IFrame[]
  let text: string

  switch (action.type) {
    case ADD_FRAME:
      frame = action.payload.frame
      log('reducer.state', state)
      log('reducer.ADD_FRAME', frame)
      newState = {
        ...state,
        frames: [
          ...state.frames, frame
        ]
      }
      log('newState', newState)
      return newState

    case ADD_PHRASE:
      // reducer dont have any type checking, everything is a payload FML
      frame = state.frames[state.activeFrame]
      text = action.payload.text
      frame.text += ' ' + text   // add a space before new words
      state.frames[state.activeFrame] = frame
      newState = { ...state, frames: [...state.frames] }
      log('add_PHRASE', action.payload, '=>', state.frames.length);
      return newState

    case NEW_FRAME:
      frames = state.frames
      frame = {
        text: action.payload.text || '',
        idx: frames.length
      }
      const activeFrame = frames.length
      frames.push(frame)
      frames = setActive(state.frames, activeFrame)
      newState = {
        ...state,
        frames: [...frames],
        activeFrame
      }
      return (done(newState))

    case PICK_FRAME:
      const activeIdx = action.payload.idx
      frames = setActive(state.frames, activeIdx)
      newState = {
        ...state,
        frames,
        activeFrame: action.payload.idx
      }
      log('newState', newState)
      return newState

    case ADD_COUNT:
      return { ...state, count: state.count + 1}

    default:
      return state
  }
}


// const rootReducer = combineReducers({
//   frameReducer
// })

// export default rootReducer


export default frameReducer

