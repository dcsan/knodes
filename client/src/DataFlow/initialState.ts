import { IFrame } from '../components/common/Frame/Frame'

export interface IChatState {
  count: number,
  frames: IFrame[]
  activeFrame: number
  inputText: string
}

let frames: IFrame[] = [
  {
    text: "How is everything there?",
    idx: 0
  },
  {
    text: "I'm OK but people are worried about the virus",
    idx: 1
  },
  {
    text: "I read the train stations are being shut",
    idx: 2
  },
  {
    text: "Yes I think they've closed six cities.",
    idx: 3,
    active: true
  },
]

let initialState: IChatState = {
  count: 0,
  frames,
  activeFrame: frames.length - 1,
  inputText: ''
}

export { initialState }
