import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import CoinListHeader from './CoinListHeader'
import CoinListItem from './CoinListItem'
import { fetchCoins } from '../reducers/coins'

class CoinList extends Component {

  componentDidMount() {
    this.props.fetchCoins()
  }

  render() {
    let coinList = this.props.coinList
    if (coinList && coinList.length > 0) {
      return (
        <Table className="coin-list">
          <CoinListHeader />
          <tbody>
            {
              coinList.map(coin => {
                return <CoinListItem key={coin.symbol} coin={coin} />
              })
            }
          </tbody>
        </Table>
      )
    }
    return (
      <p>Loading...</p>
    )
  }
}

const mapStateToProps = state => ({
  coinList: state.coins.coinList
})

const mapDispatchToProps = dispatch => ({
  fetchCoins: () => dispatch(fetchCoins()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CoinList)