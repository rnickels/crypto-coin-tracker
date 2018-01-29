import React from 'react'

const CoinIcon = props => {
  let symbol = props.coinSymbol
  let url = `https://chasing-coins.com/api/v1/std/logo/${symbol}`
  return (
    <img src={url} alt={`${symbol} logo`} />
  )
}

export default CoinIcon