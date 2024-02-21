// store-block/react/Countdown.tsx
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl' 
import { useQuery } from 'react-apollo'
import useProduct from 'vtex.product-context/useProduct'
import productReleaseDate from './graphql/productReleaseDate.graphql'
//import { TwitterShareButton, TwitterIcon } from 'react-share'

interface CountdownProps {
  targetDate: string
}

const CSS_HANDLES = ['twitShare']

const Twitpost: StorefrontFunctionComponent<CountdownProps> = ({}) => {

  const handles = useCssHandles(CSS_HANDLES)

  const titleText = <FormattedMessage id="editor.twitposter.title"/>

  const { product } = useProduct()

  const { data, loading, error } = useQuery(productReleaseDate, {
    variables: {
      slug: product?.linkText
    },
    ssr: false
  })

  if (!product) {
    return (
      <div>
        <span>No hay producto en el contexto</span>
      </div>
    )
  }

  if (loading) {
    return (
      <div>
        <span>Cargando...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <span>Error!</span>
      </div>
    )
  }

  console.log(data)

  return (
    <div className={`${handles.countdown} c-muted-1 db tc`}>
      <span>{titleText} ahora</span>
      {/* <TwitterShareButton
        url="https://davidprivarsa--privarsa.myvtex.com/herramientas-de-fin-de-brazo-centrador-garra-643666/p"
        title="hola"
        className="Demo__some-network__share-button">
        <TwitterIcon
          size={32}
          round />
      </TwitterShareButton> */}
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