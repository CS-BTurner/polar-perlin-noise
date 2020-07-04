import p5 from 'p5';
import React from 'react';

import Sketch from './sketch';

export default function P5Sketch() {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    new p5(Sketch, ref.current as HTMLElement);
  }, []);

  return <div ref={ref} />;
}
