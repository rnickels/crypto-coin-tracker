import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCoinDetails } from '../reducers/coins'
import { Row, Col } from 'react-bootstrap'
import CoinIcon from './CoinIcon'

class Coin extends Component {

  componentDidMount() {
    if (this.props.match.params['name']) {
      this.props.fetchCoinDetails(this.props.match.params['name'])
    }
  }

  render() {
    let coin = this.props.coinDetails
    return (
      <div className="coin content">
        <Row>
          <Col xs={1}>
            <CoinIcon coinSymbol={coin.symbol} />
          </Col>
          <Col xs={4}>
            <h4>{coin.name}</h4>
          </Col>
        </Row>
        <p>Symbol: {coin.symbol}</p>
        <p>Price USD: {coin.price_usd}</p>
        <p>Price BTC: {coin.price_btc}</p>
        <p>Hour Change: {coin.percent_change_1h}</p>
        <p>Day Change: {coin.percent_change_24h}</p>
        <p>Week Change: {coin.percent_change_7d}</p>
        <p>24 Hour Volume: {coin['24h_volume_usd']}</p>
        <p>Market Cap: {coin.market_cap_usd}</p>
        <p>Available Supply: {coin.available_supply}</p>
        <p>Total Supply: {coin.total_supply}</p>
        <p>Max Supply: {coin.max_supply}</p>
      </div >
    )
  }
}

const mapStateToProps = state => ({
  coinDetails: state.coins.coinDetails
})

const mapDispatchToProps = dispatch => ({
  fetchCoinDetails: (name) => dispatch(fetchCoinDetails(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Coin)