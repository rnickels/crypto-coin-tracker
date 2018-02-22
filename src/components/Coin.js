import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchCoinDetails, fetchCoinHistory } from '../reducers/coinList'
import { Row, Col } from 'react-bootstrap'
import CoinIcon from './CoinIcon'
// import LineChart from './LineChart'
// import LineChartToolTip from './LineChartToolTip'
// import InfoBox from './InfoBox'

class Coin extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     hoverLoc: null,
  //     activePoint: null,
  //   }
  // }

  componentDidMount() {
    if (this.props.match.params['name']) {
      // this.props.fetchCoinDetails(this.props.match.params['name'])
      // this.props.fetchCoinHistory('BTC', 30)
    }
  }

  // handleChartHover(hoverLoc, activePoint) {
  //   this.setState({
  //     hoverLoc: hoverLoc,
  //     activePoint: activePoint,
  //   })
  // }

  render() {
    let coin = this.props.coinDetails
    let coin30DayHistory = this.props.coin30DayHistory
    console.log(coin30DayHistory)
    return (
      <div className="container">
        <div className="row">
          <h1>30 day Bitcoin Price Chart</h1>
        </div>
        <div className="row">
          {/* !this.state.fetchingData ?
            <InfoBox data={coin30DayHistory} />
          : null */}
        </div>
        <div className="row">
          <div className="popup">
            {/* this.state.hoverLoc ?
              <LineChartToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint} />
            : null */}
          </div>
        </div>
        <div className="row">
          <div className="chart">
            {/* !this.state.fetchingData ?
              <LineChart data={coin30DayHistory} onChartHover={(a, b) => this.handleChartHover(a, b)} />
            : null */}
          </div>
        </div>

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
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  coinDetails: state.coins.coinDetails,
  coinHistory: state.coins.coinHistory,
})

const mapDispatchToProps = dispatch => ({
  // fetchCoinDetails: (name) => dispatch(fetchCoinDetails(name)),
  // fetchCoinHistory: (symbol, days) => dispatch(fetchCoinHistory(symbol, days))
})

export default connect(mapStateToProps, mapDispatchToProps)(Coin)