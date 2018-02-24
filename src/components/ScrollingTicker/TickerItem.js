import React from 'react'
import FormattedCurrencyString from '../FormattedCurrencyString'
import PriceChangeArrowIcon from '../PriceChangeArrowIcon'

const TickerItem = props => {
  let { symbol, price_usd, percent_change_24h } = props.coin
  let color = getColorClass(percent_change_24h)
  return (
    <div className="scrolling-ticker-item">
      <div><b>{symbol}</b></div>
      <FormattedCurrencyString value={price_usd} />
      <PriceChangeArrowIcon percentChange={percent_change_24h} />
      <div className={`percent-change ${color}`}>{percent_change_24h}%</div>
    </div>
  )
}

const getColorClass = percentChange => {
  let color = ''
  if (Math.sign(percentChange) === 1) {
    return 'green'
  } else if (Math.sign(percentChange) === -1) {
    return 'red'
  }
  return color
}

export default TickerItem