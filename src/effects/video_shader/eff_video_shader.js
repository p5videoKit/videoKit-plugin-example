//
import a_vert from './shader_vert.js';
import a_frag from './shader_effect_frag.js';

export default class eff_video_shader {
  static meta_props = [
    { rop: 'window_left', label: 'window_left', slider: { min: 0, max: 1 }, style: 'width:20%', default: 0.4 },
    { prop: 'window_right', label: 'right', slider: { min: 0, max: 1 }, style: 'width:20%', default: 0.6, br: 1 },
    { prop: 'window_top', label: 'window_top', slider: { min: 0, max: 1 }, style: 'width:20%', default: 0.4 },
    { prop: 'window_bottom', label: 'bottom', slider: { min: 0, max: 1 }, style: 'width:20%', default: 0.6, br: 1 },
  ];
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
    this.aShader.setUniform('window_left', this.window_left);
    this.aShader.setUniform('window_right', this.window_right);
    this.aShader.setUniform('window_top', this.window_top);
    this.aShader.setUniform('window_bottom', this.window_bottom);

    // rect gives us some geometry on the screen
    this.output.rect(0, 0, this.input.width, this.input.height);
  }
  init() {
    let { width, height } = this.input;

    this.output = createGraphics(width, height, WEBGL);
    this.output.clear();

    this.aShader = createShader(a_vert, a_frag);
  }
}

// src/effects/video_shader/zz/sketch.js
// https://editor.p5js.org/jht9629-nyu/sketches/l--iDtUbG
// ims-05-video shader
