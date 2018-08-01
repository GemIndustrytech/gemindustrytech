import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Gem Industry Tech</Link>
            </div>
            <ul className="nav navbar-nav gem-tech-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/images">Images</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/">Page 3</Link></li>
            </ul>
          </div>
        </nav>
        <div id="main" className="container-fluid clear-top">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Navigation;
