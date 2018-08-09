Removes non human frequencies from audio. 
Useful for downsizing files before sending to speech to textAPI. 
Eg Watson 100MB file size restriction. 

```
ffmpeg -i aliceinwonderland_01_gerstenberg_64kb.mp3 -y -ar 8000 -af "highpass=f=200, lowpass=f=3000"  -ab 64 -ac 1 -acodec mp3 test1.mp3
```

---

[Link to trello card: Banpass filter module](https://trello.com/c/DSNkuO3C)

##### Labels

Node module, 