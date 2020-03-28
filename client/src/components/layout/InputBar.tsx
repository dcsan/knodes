import React, {
  useState,
  // useEffect
} from 'react';

import { connect } from 'react-redux'

import {
  // addFrame,
  addPhrase,
  newFrame
} from '../../DataFlow/actions'

// import { IFrame } from '../common/Frame/Frame'

import './InputBar.css'

// const InputBar: React.FC<{}> = (props: {}) => {

//   const [msg, setMsg ] = useState('')

//   useEffect(() => {

//   })



interface IBar {
  dispatch: any
  msg?: string
}


const InputBar = (opts: IBar) => {
  const [msg, setMsg] = useState('')
  // let input: any
  // console.log('inputBar', opts)

  const sendInput = (evt: any) => {
    evt.preventDefault()
    if (!msg) {
      // empty msg creates new frame
      // TODO - allow creating new frame more easily with text
      opts.dispatch(newFrame({text: msg}))
      console.log('newFrame')
    } else {
      console.log('sendInput', msg)
      opts.dispatch(addPhrase({text: msg}))
    }
    setMsg('')
  }

  const changeInput = (evt: any) => {
    const text = evt.target.value
    evt.preventDefault()
    setMsg(text)
    // console.log('send:', text)
  }

  return (
    <form>
      <div className='input-bar'>
        <input className='input-text-field' type='text' value={ msg } onChange={ changeInput }></input>
        <button onClick={ sendInput } className='send-button'>send</button>
      </div>
    </form>
  )
}

// export default InputBar

export default connect()(InputBar)

// export default InputBar
