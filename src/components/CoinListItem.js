import React from 'react'
import { Link } from 'react-router-dom'
import CoinIcon from './CoinIcon'
import FormattedCurrencyString from './FormattedCurrencyString'
import PriceChangeArrowIcon from './PriceChangeArrowIcon';

const CoinListItem = props => {
  let coin = props.coin
  return (
    <tr className="coin-list-item">
      <td>
        <CoinIcon coinSymbol={coin.symbol} />
      </td>
      <td>
        <Link to={`/coins/${coin.id}`}>
          <h5>{coin.name}</h5>
        </Link>
      </td>
      <td>{coin.symbol}</td>
      <td>
        <FormattedCurrencyString value={coin.price_usd} />
      </td>
      <td>
        <PriceChangeArrowIcon percentChange={coin.percent_change_24h} size={'fa-lg'} />
        {coin.percent_change_24h}%
      </td>
      <td>
        <PriceChangeArrowIcon percentChange={coin.percent_change_7d} size={'fa-lg'} />
        {coin.percent_change_7d}%
      </td>
      <td>
        <FormattedCurrencyString value={coin.market_cap_usd} currency={'usd'} />
      </td>
    </tr>
  )
}

export default CoinListItem