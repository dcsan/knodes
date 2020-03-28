import React from 'react';

import './Chunk.css'

export interface IChunk {
  en: string
  freq: number
}

const Chunk: React.FC<IChunk> = (props: IChunk) => {
  console.log('chunk.props', props)
  const style = {
    fontSize: props.freq
  }
  return (
    <span className='chunk-box' style={style}>
      { props.en }
    </span>
  )
};

export { Chunk }

