// store-block/react/Countdown.tsx
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'
import useProduct from 'vtex.product-context/useProduct'
import { TwitterShareButton, TwitterIcon } from 'react-share'

interface CountdownProps {
  targetDate: string
}

const CSS_HANDLES = ['twitShare']

const Twitpost: StorefrontFunctionComponent<CountdownProps> = ({}) => {

  const handles = useCssHandles(CSS_HANDLES)

  const titleText = <FormattedMessage id="editor.twitposter.title"/>

  const { product } = useProduct()
  
  const desc:string = product.description.toString() || ""
  const titulo:string = `Mira esto: ${desc}`
  const currentUrl = product.link.toString() || ""

  return (
    <div className={`${handles.countdown} db tc`}>
      <span>{titleText}</span> <br/>
      <span>{titulo}</span> <br/>
      <span>{currentUrl}</span> <br/>

      <TwitterShareButton
        url={currentUrl}
        title={titulo}
        className="Twiter-share-button">
        <TwitterIcon
          size={32}
          round />
      </TwitterShareButton>
    </div>
  )
}

Twitpost.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: { },
}

export default Twitpost