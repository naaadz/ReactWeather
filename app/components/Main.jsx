import React from 'react';
import Nav from 'Nav';

let Main = (props) => {

  return (
    <div>
      <Nav />
      <div className="row">
        <div className="column medium-6 large-6 small-centered">
        {props.children}
        </div>
      </div>
    </div>
  )
}


export default Main;
