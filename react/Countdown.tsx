import React from 'react'

interface CountdownProps {
  title: string 
}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({title}) => {
  return(
    <div>
      <h1>{title}</h1>
    </div>  
    )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    title:{
      title: 'titulo',
      type: 'string',
      default: null
    }
  },
}

export default Countdown