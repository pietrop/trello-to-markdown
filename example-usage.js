// const trelloToMarkdownFolders = require('trello-to-markdown');
const trelloToMarkdownFolders = require('./index.js');

// If the board you want to convert is private, change privateBoard to "true" and add your api information, otherwise skip this
const privateBoard = false;
//Get your key and token from https://trello.com/app-key
const trelloApiKey = 'yourTrelloApiKey';
const trelloApiToken = 'yourTrelloApiToken'

const boardIdTextAVComponents = '58mo9Tpa';
trelloToMarkdownFolders({boardId: boardIdTextAVComponents, privateBoard: privateBoard, trelloApiKey: trelloApiKey, trelloApiToken: trelloApiToken, destFolderName: 'docs' });
