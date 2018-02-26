import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const SideBar = ({
  location,
  backgroundColor,
  enableBackgroundImage,
  backgroundImage,
}) => (
    <div className="sidebar" data-color={backgroundColor}>
      <div className="sidebar-wrapper">
        <div className="logo">
          <a href="/" className="simple-text">
            CoinTracker
          </a>
        </div>
        <ul className="nav">
          <li className={location.pathname === '/' ? 'active' : null}>
            <Link to="/">
              <i className="pe-7s-graph"></i>
              <p>Coin List</p>
            </Link>
          </li>
          <li className={location.pathname === '/login' ? 'active' : null}>
            <Link to="/login">
              <i className="pe-7s-graph"></i>
              <p>Login</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )

const mapStateToProps = state => ({
  enableBackgroundImage: state.themeOptions.enableBackgroundImage,
  backgroundColor: state.themeOptions.backgroundColor,
  backgroundImage: state.themeOptions.backgroundImage,
})

export default withRouter(
  connect(mapStateToProps)(SideBar)
)