//
export default class eff_video_shader {
  static meta_props = [
    { prop: 'expand', selection: [1, 2, 3] },
    { prop: 'step', selection: [1, 0.1, 0.2, 2, 4] },
    { prop: 'period', selection: [-1, 0, 1, 2, 3] },
  ];

  constructor(props) {
    //
    Object.assign(this, props);
    console.log('eff_video_shader props.expand', props.expand);
    // console.log('eff_a_slit_scan constructor width, height', width, height);

    this.vw = this.input.width;
    this.vh = this.input.height;
    console.log('eff_video_shader constructor input vw vh', this.vw, this.vh);

    // !!@ needed after reset
    let expand = this.expand || 1;
    this.output = createGraphics(this.vw * expand, this.vh);
    // this.output.background(255);

    this.x = 0;
  }
  prepareOutput() {
    // console.log('eff_a_slit_scan prepareOutput output', this.output);
    this.input.loadPixels();
    this.output.copy(this.input, this.vw / 2, 0, 1, this.vh, this.x, 0, 1, this.vh);
    this.x = this.x + this.step;
    if (this.x > this.output.width) {
      this.x = 0;
    }
  }
}

// src/effects/video shader/sketch.js
// https://editor.p5js.org/jht9629-nyu/sketches/l--iDtUbG
// ims-05-video shader
