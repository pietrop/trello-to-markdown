# `trello-to-markdown`

A node module to export a trello board, and convert it into a set of folders, and markdown files, corresponding to lists and cards on the board.

Used to convert [textAV](textAV.tech) components board into gitbook.

## Setup

`npm install trello-to-markdown`

## Usage

```js
const trelloToMarkdownFolders = require('trello-to-markdown');

const boardIdTextAVComponents = '58mo9Tpa';
trelloToMarkdownFolders({boardId: boardIdTextAVComponents, destFolderName: 'docs' );
```

Where `destFolderName` is just the name of the folder, not the path.

see [`example-usage.js`](./example-usage.js)

<!-- To run example do `node example-usage.js` -->

## System Architecture

- calls trello API with board id
- get the lists in the boards
- uses that to create the folder structure
- second call to trello API gets the cards
- iterate through the cards
  - and write description content of card as markdown file
  - in the folder corresponding to that card
- Also creates as summary page
- done

## Development env

- node
- npm

## Build

_How to run build_

No build steps

## Tests

_How to carry out tests_

No automated tests for now, see [`example-usage.js`](./example-usage.js) to try it out locally

## Deployment

<!-- _How to deploy the code/app into test/staging/production_ -->

to publish module to npm

```
npm run publish:public
```

<!--
### TODO

- [x] add module.exports
- [x] move card id as param
- [ ] figure out how to return a promise
      eg see dropbox paper to markdown Alvin PR
- [ ] push to npm
- [ ] new repo to get from tello textAV and create gitbook -->
