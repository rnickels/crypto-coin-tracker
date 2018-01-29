import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

const MobileMenu = ({ location, backgroundColor }) => (
  <div>
    <div className="mobile-nav collapse navbar-collapse" data-color={backgroundColor}>
      <div className="logo">
        <a href="/" className="simple-text">CoinTracker</a>
      </div>
      <ul className="nav navbar-nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph"></i>
            <p>Dashboard</p>
          </Link>
        </li>
        <li className={location.pathname === '/profile' ? 'active' : null}>
          <Link to="/profile">
            <i className="pe-7s-user"></i>
            <p>User Profile</p>
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

const mapStateToProps = state => ({
  backgroundColor: state.themeOptions.backgroundColor
})

export default withRouter(connect(mapStateToProps)(MobileMenu))