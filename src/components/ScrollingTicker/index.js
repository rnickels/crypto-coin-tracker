import React from 'react'
import TickerItem from './TickerItem';

const ScrollingTicker = props => {
  return (
    <p className="scrolling-ticker">
      <span>
        {
          props.coins.map(coin => {
            return <TickerItem key={coin.symbol} coin={coin} />
          })
        }
      </span>
    </p>
  )
}

export default ScrollingTicker