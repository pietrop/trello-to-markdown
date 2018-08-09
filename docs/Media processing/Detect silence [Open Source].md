A module that uses ffmpeg (or sox?) to detect silences in a video/audio file, eg while somene is speaking, and returns some kind of data structure.

eg https://stackoverflow.com/questions/36074224/how-to-split-video-or-audio-by-silent-parts

eg 

```
ffmpeg -i "input.mov" -af silencedetect=noise=-30dB:d=0.5 -f null - 2> vol.txt
```

or with node [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg#audiofiltersfilter-add-custom-audio-filters)

---

[Link to trello card: Detect silence [Open Source]](https://trello.com/c/jIgbeG5w)

##### Labels

Node module, 