### Brief description 
*A paragraph describing in a nutshell what the project does. Context and relevance.*



A module to download videos from yotube url (as well as other) would be useful. Perhaps with support to download captions when available. 

Inspired by [kshivanku/VideoEditor](https://github.com/kshivanku/VideoEditor)

Electron app proof of concept:

I got frustrated with the firefox plugin I was using to achieve the same  and so I gave it a try at making an electron app, [`video-downloader`](https://github.com/pietrop/electron-video-downloader)  that given a youtube url can 
- download the file locally as mp4
- download as mp3, wav, mov 
- download associated captions. 

using `youtube-dl` but can't seem to work with vimeo. 

It be good for this to be compatible with direct url to video files. 


### Stage of production: 
*eg, prototype, working app, rolled out with users etc..*

youtube-dl exists as a library. Example usage in projects mentioned above. 
A component needs to be defined and abstracted. 
also needs evaluating whether this is necessary, using youtube-dl might prove to be enough for most cases?

### Any blockers? 
*What are the things that are currently most challenging for your project?*

- Feedback on how to extract/create a standalone reusable module to download videos from youtube (and others
- and what the interface should be, 
- if anyone knows how youtube-dl binary is implemented under the hood? eg does it use ffmpeg? can it be used cross platform?

### Components 
*Any components you'd like to abstract/share/open source?*

### Github repo if available
*Github repo for the project if open source*


### Demo Video 
*Link to site, demo (and/or video)*

### Website 
*eg github project page or README where can find out more*

### List of Stack used 
*Eg programming languages, frameworks etc..*

- node
- electron
- youtube-dl

### Contributors list 
*People working on this project*

- Pietro

---

[Link to trello card: Youtube Video downloader module (?) [Open Source]](https://trello.com/c/wgGQKXis)

##### Labels

Node module, 