import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container-fluid">
      <nav className="pull-left">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Coins</a>
          </li>
          <li>
            <a href="/">Exchanges</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
      </nav>
      <p className="copyright pull-right">
        © 2017 <a href="/">BroccoliRobots</a>
      </p>
    </div>
  </footer>
);

export default Footer;