import p5 from 'p5';

export default function Sketch(p: p5) {
  let canvas: p5.Renderer;

  p.setup = () => {
    canvas = p.createCanvas(400, 400);
    p.noStroke();
  };

  p.draw = () => {
    p.background(220);
    p.translate(30, 20);
    p.rect(0, 0, 55, 55);
  };
}
