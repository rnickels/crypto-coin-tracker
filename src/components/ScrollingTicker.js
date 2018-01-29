import React from 'react'
import ScrollingTickerItem from './ScrollingTickerItem';

const ScrollingTicker = props => {
  return (
    <p className="scrolling-ticker">
      <span>
        {
          props.coins.map(coin => {
            return <ScrollingTickerItem key={coin.symbol} coin={coin} />
          })
        }
      </span>
    </p>
  )
}

export default ScrollingTicker