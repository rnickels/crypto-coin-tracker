import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import cx from 'classnames'
import { setMobileNavVisibility } from '../../reducers/layout'
import Header from './Header'
// import Footer from './Footer'
import SideBar from '../../components/SideBar'
import MobileMenu from '../../components/MobileMenu'
import CoinList from '../../components/CoinList'
import Coin from '../../components/Coin'
import ScrollingTicker from '../../components/ScrollingTicker'
// import { fetchCoins } from '../../reducers/coinList'

const Main = ({ mobileNavVisibility, hideMobileMenu, history, coinList }) => {
  history.listen(() => {
    if (mobileNavVisibility === true) {
      hideMobileMenu()
    }
  })

  // if (!coinList || coinList.length === 0) {
  //   fetchCoins()
  // }

  return (
    <div className={cx({
      'nav-open': mobileNavVisibility === true
    })}>
      { /* <ScrollingTicker coins={coinList} /> */}
      <div className="wrapper">
        <SideBar />
        <div className="main-panel">
          <Header />
          <Route exact path="/" component={CoinList} />
          { /* <Route path="/coins/:name?" component={Coin} /> */}
        </div>
      </div>
      <MobileMenu />
    </div>
  )
}

const mapStateToProps = state => ({
  mobileNavVisibility: state.layout.mobileNavVisiblity,
  coinList: state.coins,
})

const mapDispatchToProps = dispatch => ({
  hideMobileMenu: () => dispatch(setMobileNavVisibility(false)),
  // fetchCoins: () => dispatch(fetchCoins()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))