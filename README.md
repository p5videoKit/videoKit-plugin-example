# [videoKit-plugin-example](https://github.com/p5videoKit/videoKit-plugin-example.git)

- p5videoKit plug in example using unpkg.com/p5-video-kit library

- [pages](https://p5videokit.github.io/videoKit-plugin-example/)

save button upload to firebase cloud storage

- [index ?v=8](src/index.html?v=8)
  - ?v=8 to force page reload

- [circle4](./src/index.html?a=%7B%22setting%22%3A%22effects4%22%2C%22comment%22%3A%22circle4%22%2C%22back_color%22%3A1%2C%22room_name%22%3A%22Dice-Play-1%22%2C%22patch_layout%22%3A%222x2%22%2C%22canvas_size%22%3A%22960x540%22%2C%22capture_size%22%3A%22480x270%22%2C%22render_size%22%3A%22Canvas%22%2C%22chat_name%22%3A%22jht%22%2C%22chat_chk%22%3A0%2C%22live_index%22%3A0%2C%22live_chk%22%3A0%2C%22urects_lock%22%3A0%2C%22urects_count%22%3A4%2C%22canvas_resize_ref%22%3A%22%22%2C%22canvas_data_chk%22%3A0%2C%22audio_enabled%22%3A0%2C%22mediaDiv_states%22%3A%5Bnull%2C%7B%22vis%22%3A0%2C%22mute%22%3A1%7D%5D%2C%22patches%22%3A%5B%7B%22eff_spec%22%3A%7B%22ipatch%22%3A0%2C%22imedia%22%3A1%2C%22eff_label%22%3A%22circle%22%2C%22urect%22%3A%7B%22x0%22%3A0%2C%22y0%22%3A0%2C%22width%22%3A480%2C%22height%22%3A270%7D%2C%22ifliph%22%3A0%2C%22iflipv%22%3A1%7D%2C%22eff_props%22%3A%7B%22per_frame%22%3A50%2C%22ntry%22%3A1000%2C%22period%22%3A20%7D%7D%2C%7B%22eff_spec%22%3A%7B%22ipatch%22%3A1%2C%22imedia%22%3A1%2C%22eff_label%22%3A%22circle%22%2C%22urect%22%3A%7B%22x0%22%3A480%2C%22y0%22%3A0%2C%22width%22%3A480%2C%22height%22%3A270%7D%2C%22ifliph%22%3A1%2C%22iflipv%22%3A1%7D%2C%22eff_props%22%3A%7B%22per_frame%22%3A50%2C%22ntry%22%3A1000%2C%22period%22%3A20%7D%7D%2C%7B%22eff_spec%22%3A%7B%22ipatch%22%3A2%2C%22imedia%22%3A1%2C%22eff_label%22%3A%22circle%22%2C%22urect%22%3A%7B%22x0%22%3A0%2C%22y0%22%3A270%2C%22width%22%3A480%2C%22height%22%3A270%7D%2C%22iflipv%22%3A0%2C%22ifliph%22%3A0%7D%2C%22eff_props%22%3A%7B%22per_frame%22%3A50%2C%22ntry%22%3A1000%2C%22period%22%3A20%7D%7D%2C%7B%22eff_spec%22%3A%7B%22ipatch%22%3A3%2C%22imedia%22%3A1%2C%22eff_label%22%3A%22circle%22%2C%22urect%22%3A%7B%22x0%22%3A480%2C%22y0%22%3A270%2C%22width%22%3A480%2C%22height%22%3A270%7D%2C%22iflipv%22%3A0%2C%22ifliph%22%3A1%7D%2C%22eff_props%22%3A%7B%22per_frame%22%3A50%2C%22ntry%22%3A1000%2C%22period%22%3A20%7D%7D%5D%7D)
  - circle effect in 2x2 layout. h & v reflections

- [firebase storage console from github pages](https://console.firebase.google.com/project/molab-485f5/storage/molab-485f5.appspot.com/files/~2Fm0-@r-@w-~2Fmo-example~2Fm0-example~2FgKH9MHx7SXbJ9VHfOcjQamzHxXh2)

# TODO

- [] BUG: settings fail, use popup,
  - add my.settings_path_root to point to host or local
- layout 1x2, 1x3

## Notes

```
2026-04-22 22:13:42
[] Failure on mobile
Info: The current domain is not authorized for OAuth operations. This will prevent signInWithPopup, signInWithRedirect, linkWithPopup and linkWithRedirect from working. Add your domain (p5videokit.github.io) to the OAuth redirect domains list in the Firebase console -> Authentication -> Settings -> Authorized domains tab.

2026-04-21 10:27:43
[] BUG: settings fail
circle4

[] sync with
/Users/jht2/Documents/projects/_2025/_videoKit/covid19-ticker
/Users/jht2/Documents/projects/_2025/_videoKit/videoKit-plugin-example

?u=1&d=settings/example_props.json
?u=2&d=settings/simplex_speed_1.json

# --
2026-04-09 11:17:53

>> for error overconstraint must check camera/mic permissions in chrome

```

## Done

- [x] Log firebase cloud storage path
