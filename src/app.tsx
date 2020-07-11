import React from 'react';
import Sketch from './p5-sketch';

export default function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#FFF', position: 'relative' }}>
      <Sketch />

      <div style={{ zIndex: 1, position: 'absolute', top: '10rem', left: '2rem' }}>
        <h2>Faster than the speed of light</h2>
      </div>
    </div>
  );
}
