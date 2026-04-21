//

function videoKit_setup() {
  //
  videoKit = p5videoKit_init(videoKit_config);

  // handler to save canvas to server
  videoKit.save_canvas_handler = save_canvas_handler;

  // handler to tell videoKit where to find effects
  videoKit.import_effect_handler = (effMeta) => import('../' + effMeta.import_path);
}

let videoKit_config = {
  // effects for import, will appear at top of the effect menu

  // an EFFECT can have many PROPERTIES specific to the effect
  // for example canvas size, color, cell size,
  // to see this, choose "circle" in Effect1 and Effect2,
  // then choose different properties like number of circles per frame
  // or the video source

  // the "effects" array creates a pull-down menu
  // which offers a first selection of effects added to the VideoKit library,
  // you could add some more !!!!

  effects: [
    { label: 'example_props', import_path: 'effects/eff_example_props.js' },
    { label: 'shader_clamp', import_path: 'effects/eff_shader_clamp.js' },
    { label: 'simplex', import_path: 'effects/eff_simplex.js' },
    { label: 'slit_scan', import_path: 'effects/eff_slit_scan.js' },
    { label: 'worley', import_path: 'effects/eff_worley.js' },
    { label: 'video_shader', import_path: 'effects/video_shader/eff_video_shader.js' },
  ],

  // settings for import, will appear in the settings menu

  // SETTINGS will load a save .json file with predefined values
  // for all the settings associated with the effect
  // "settings" is an array of

  settings: [
    { label: 'example_props', import_path: 'settings/example_props.json' },
    { label: 'simplex_speed_1', import_path: 'settings/simplex_speed_1.json' },
    { label: 'circle4', import_path: 'settings/circle4.json' },
  ],

  videos: [],
};
