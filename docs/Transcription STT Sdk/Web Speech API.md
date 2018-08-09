Some notes: 

demo
https://www.google.com/intl/en/chrome/demos/speech.html

docs 
https://github.com/googlearchive/webplatform-samples/blob/master/webspeechdemo/webspeechdemo.html

blog
https://shapeshed.com/html5-speech-recognition-api/

Can try this in your browser

```
var recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;

recognition.lang = 'en-GB';

recognition.onresult = function(event) {
	console.log(event.results)
}

recognition.start();
// mic will prompt to allow

// speak to the mic

recognition.stop();
```



---

[Link to trello card: Web Speech API](https://trello.com/c/NsSx3EJp)

##### Labels

STT, 