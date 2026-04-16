//
export default class eff_video_shader {
  constructor(props) {
    Object.assign(this, props);
    // console.log('eff_shader_clamp props', props);
    this.init();
  }
  prepareOutput() {
    // console.log('eff_shader_clamp prepareOutput');
    this.output.shader(this.aShader);

    // passing cam as a texture
    this.aShader.setUniform('tex0', this.input);

    // rect gives us some geometry on the screen
    this.output.rect(0, 0, this.input.width, this.input.height);
  }
  init() {
    let { width, height } = this.input;

    this.aShader = createShader(a_vert, a_frag);

    this.output = createGraphics(width, height, WEBGL);
    this.output.clear();
  }
}

// src/effects/video shader/sketch.js
// https://editor.p5js.org/jht9629-nyu/sketches/l--iDtUbG
// ims-05-video shader
