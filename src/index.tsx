import React from 'react';
import ReactDOM from 'react-dom';

import Sketch from './p5-sketch';

function Test() {
  return <h2>Travellin at the speed of light</h2>;
}

const container = document.getElementById('container');
ReactDOM.render(<Sketch />, container);
