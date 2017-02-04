import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component {

onSearch(e){
    e.preventDefault;
    
}

render() {

    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">ReactWeather</li>
            <li><IndexLink activeClassName="active" to="/">Get Weather</IndexLink></li>
            <li><Link activeClassName="active" to="/about">About</Link></li>
            <li><Link activeClassName="active" to="/examples">Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
          <ul className="menu">
            <li><input type="search" placeholder="Search Weather" /></li>
            <li><button type="button" className="button">Get Weather</button></li>
          </ul>
        </form>
        </div>
      </div>
    )

  }

}

export default Nav;
