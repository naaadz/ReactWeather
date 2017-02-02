import React from 'react';
import {Link, IndexLink} from 'react-router';

let Nav = (props) => {
  return(
    <ul>
      <li><IndexLink activeClassName="active" to="/">Get Weather</IndexLink></li>
      <li><Link activeClassName="active" to="/about">About</Link></li>
      <li><Link activeClassName="active" to="/examples">Examples</Link></li>
    </ul>
  )
}

export default Nav;
