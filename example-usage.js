// const trelloToMarkdownFolders = require('trello-to-markdown');
const trelloToMarkdownFolders = require('./index.js');

const boardIdTextAVComponents = '58mo9Tpa';
trelloToMarkdownFolders({boardId: boardIdTextAVComponents, destFolderName: 'docs' });
