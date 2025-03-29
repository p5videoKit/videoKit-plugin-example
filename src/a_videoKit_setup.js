//

function videoKit_setup() {
  //
  videoKit = p5videoKit_init(videoKit_config);

  videoKit.save_canvas_handler = save_canvas_handler;
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
    { label: 'a_example_props', factory: eff_a_example_props },
    { label: 'eff_simplex', factory: eff_simplex },
    { label: 'eff_worley', factory: eff_worley },

    // { label: 'a_example_props', import_path: 'effects/eff_a_example_props.js' },
    // { label: 'eff_simplex', import_path: 'effects/eff_simplex.js' },
    // { label: 'eff_worley', import_path: 'effects/eff_worley.js' },
  ],

  // settings for import, will appear in the settings menu

  // SETTINGS will load a save .json file with predefined values
  // for all the settings associated with the effect
  // "settings" is an array of

  settings: [{ label: 'videoKit', import_path: 'settings/videoKit.json' }],
};

function ui_log(...args) {
  console.log(...args);
}

function ui_verbose(...args) {
  // console.log(...args);
}
