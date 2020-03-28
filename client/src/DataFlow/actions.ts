import { IFrame } from '../components/common/Frame/Frame'

export const ADD_FRAME = 'ADD_FRAME'
export const ADD_PHRASE = 'ADD_PHRASE'
export const NEW_FRAME = 'NEW_FRAME'
export const PICK_FRAME = 'PICK_FRAME'

export const ADD_COUNT = 'ADD_COUNT'

export function addFrame(frame: IFrame) {
  console.log('addFrame:', frame)
  return {
    type: ADD_FRAME,
    payload: {
      frame
    }
  }
}

interface IAddPhrase {
  text: string
}

export function addPhrase(opts: IAddPhrase) {
  console.log('action.addPhrase')
  return {
    type: ADD_PHRASE,
    payload: opts
  }
}


export function newFrame(opts: IAddPhrase) {
  return {
    type: NEW_FRAME,
    payload: opts
  }
}

// redux 'any'
export function pickFrame(payload: any) {
  return {
    type: PICK_FRAME,
    payload
  }
}


export function addCount(payload: any) {
  return {
    type: ADD_COUNT,
    payload
  }
}
