import React from 'react';
import { connect } from 'react-redux'
import { toggleMobileNavVisibility } from '../../reducers/layout'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = ({ showMobileMenu, toggleMobileNavVisibility }) => (
  <Navbar fluid={true}>
    <Navbar.Header>
      <button type="button" className="navbar-toggle" data-toggle="collapse" onClick={toggleMobileNavVisibility}>
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem><i className="fa fa-dashboard"></i></NavItem>
        <NavDropdown title={<i className="fa fa-globe" />} id="basic-nav-dropdown">
          <MenuItem>Action</MenuItem>
          <MenuItem divider />
          <MenuItem>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const mapDispatchToProps = dispatch => ({
  toggleMobileNavVisibility: () => dispatch(toggleMobileNavVisibility())
})

export default connect(null, mapDispatchToProps)(Header)