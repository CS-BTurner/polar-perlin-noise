import React from 'react';
import Sketch from './p5-sketch';

export default function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#FFF', position: 'relative' }}>
      <Sketch />

      <div style={{ zIndex: 1, position: 'absolute', top: '5rem', left: '5rem' }}>
        <h1 style={{ letterSpacing: '0.5rem' }}>Perlin Noise Mesh</h1>
        <h2 style={{ letterSpacing: '0.45rem' }}>P5 in React</h2>
        <h3 style={{ letterSpacing: '0.15rem' }}>&copy; Bradley Turner 2020</h3>
      </div>
    </div>
  );
}
