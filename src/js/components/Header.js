import React, {Component, PropTypes} from 'react';

export default class Header extends Component {

  render() {
      return (
        
    <div className="top-header">
      <div className="container">
        <div className="lt-wp"><span className="hText">india's Faster Online shopping Destination</span></div>
        <div className="rt-wp">
          <ul className="top-hooks">
            <li><a href="#gift-cart">Gift Cards</a></li>
            <li><a href="#donate-satationery"> Donate Satationery</a></li>
            <li><a href="#helf-center">Helf Center</a></li>
            <li><a href="#sell-on-snapdeal">Sell On Snapdeal</a></li>
            <li><a href="#download-app"><i className="fa fa-mobile" aria-hidden="true"></i>Download App</a></li>
          </ul>
        </div>
      </div>
    </div>
  
      )
  }
}
