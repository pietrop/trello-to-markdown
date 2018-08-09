### Brief description 
*A paragraph describing in a nutshell what the project does. Context and relevance.*

>A couple of modules to parse and generate srt files. No external dependencies needed.
>- parse an srt file or srt string (content of an srt file) into a json or plain text.
>- create an srt file from json
> - parse an srt file into a csv file.



### Stage of production: 
*eg, prototype, working app, rolled out with users etc..*

### Any blockers? 
*What are the things that are currently most challenging for your project?*

Could do with a refactor with some design patterns. And add some tests. 

[Conversation on next step on this board, in this trello card in text av video components](https://trello.com/c/Q5jClWkc/1-module-srt-parser-composer-refactor)


### Components 
*Any components you'd like to abstract/share/open source?*

Parts of this ( converting srt to word accurate json) was original extracted from hyperaudio 
http://hyperaud.io/converter who originally took it from popcornjs srt parser.
https://github.com/hyperaudio/ha-converter

The module also makes a word accurate transcription json from an srt file. 
Using code extracted from popcornjs srt module http://popcornjs.org/popcorn-docs/parsers/#SRT  https://github.com/mozilla/popcorn-js/tree/master/parsers/parserSRT 


### Github repo if available
*Github repo for the project if open source*

https://github.com/pietrop/srtParserComposer


### Demo Video 
*Link to site, demo (and/or video)*

### Website 
*eg github project page or README where can find out more*

https://www.npmjs.com/package/srt_parser_composer

### List of Stack used 
*Eg programming languages, frameworks etc..*

Javascript

### Contributors list 
*People working on this project*

Pietro Passarelli


---

[Link to trello card: Srt parser composer // Pietro [Open Source]](https://trello.com/c/lZQYawmy)

##### Labels

Node module, 