### Brief description 
There's a bunch of UI related code snippets which are always recycled from different projects, like "calculate dom element position & width in % based on time code & duration", "get scroll position of element with time code x within container element y", etc. It would be awesome to have a component / utility library of these which can be easily imported into different projects.

### Stage of production: 
Part of working code in various repos. Needs to be collected, put in standalone utility functions and neatly documented.

### Any blockers? 
none

### Components 
- List of standalone methods
  - Examples: 
    - https://github.com/OpenHypervideo/FrameTrail/blob/develop/player/types/Annotation/type.js#L142 
    - https://github.com/OpenHypervideo/FrameTrail/blob/develop/player/modules/AnnotationsController/module.js#L139 
    - https://github.com/OpenHypervideo/FrameTrail/blob/b62a06f37e40ee384408de962800c149aec07232/player/modules/HypervideoController/module.js#L827 
    - https://github.com/OpenHypervideo/FrameTrail/blob/b62a06f37e40ee384408de962800c149aec07232/player/types/ContentView/type.js#L932 
    - https://github.com/OpenHypervideo/FrameTrail/blob/develop/player/modules/OverlaysController/module.js#L152 
    - https://github.com/OpenHypervideo/FrameTrail/blob/develop/player/modules/OverlaysController/module.js#L200 
    - https://github.com/OpenHypervideo/FrameTrail/blob/develop/player/modules/OverlaysController/module.js#L392 
    - https://github.com/OpenHypervideo/FrameTrail/blob/b62a06f37e40ee384408de962800c149aec07232/player/types/ContentView/type.js#L420 
- Potentially a simple search mechanism & UI to find suitable code snippets to copy & paste

### Github repo if available
not yet there

### List of Stack used 
As this relates to UI methods, it should just come down to JS

### Contributors list 
*People working on this project*

---

[Link to trello card: UI Utilities for timecode representation](https://trello.com/c/Dc1K8tbQ)

##### Labels

Node module, UI, Front end components, Nice to have, 