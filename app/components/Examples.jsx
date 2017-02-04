import React from 'react';
import {Link} from 'react-router';

class Examples extends React.Component {

  render(){
    return (
      <div>
      <h2 className="text-centered">Examples Component!</h2>
      <p>Here are a couple examples to try out:</p>
      <ol>
        <li><Link to="/?location=philadelphia">Philadelphia</Link></li>
        <li><Link to="/?location=rio">Rio, Brasil</Link></li>
      </ol>
    </div>
    )
  }
}

export default Examples;
