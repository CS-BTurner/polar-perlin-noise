import p5 from 'p5';
import React from 'react';

import generateSketch from './sketch';

export interface SketchConfig {
  numCircles?: number;
  maxLineLength?: number;
  showBounds?: boolean;
}

export default function P5Sketch() {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    new p5(generateSketch(), ref.current as HTMLElement);
  }, []);

  return <div ref={ref} style={{ position: 'relative' }} />;
}
