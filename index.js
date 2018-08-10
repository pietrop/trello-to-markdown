const fs = require('fs-extra');
const fetch = require('node-fetch');
const sanitize = require("sanitize-filename");

function trelloToMarkdownFolders(options){
    const boardId = options.boardId;
    const trelloBoardCardsEndPoint =`https://api.trello.com/1/boards/${boardId}/?cards=all`;
    const trelloBoardLabels = `https://api.trello.com/1/boards/${boardId}/labels`
    const trelloBoardLists = `https://api.trello.com/1/boards/${boardId}/lists`

fetch(trelloBoardLists)
    .then(res => res.text())
    .then(res => JSON.parse(res))
    .then( (body) => {
       return parseTrelloResponseForLists(body, options.destFolder)
    })
    .then((lists)=>{
        fetch(trelloBoardCardsEndPoint)
            .then(res => res.text())
            .then(res => JSON.parse(res))
            .then(body => parseTrelloResponseFoCards(body, lists,  options.destFolder));
    })
}

/**
 * Creates folder structure in docs folder using the names of the lists in the trello board
 * Deletes docs file and re-writes before adding the folder, to clear it out
 * @param {*} lists - array list of json list objects, representing trello lists see ./examples/board-lists.json 
 */
function parseTrelloResponseForLists(lists, destFolder){
    fs.removeSync(destFolder);
    createDirIfDoesntExist(destFolder);
    lists.forEach((listItem,index)=>{
        createDirIfDoesntExist(`${destFolder}/${sanitize(listItem.name)}`)
    })
    return lists;
}

/**
 * iterates over cards in trello board, and create markdown for each card 
 * in the folder that corresponds to the list they belong to in the trello board 
 * also appends extra info such as link to trello board card
 * and labels associated with the card
 * @param {object} board - json object representing a trello baord  see example/board-cards.json 
 * @param {array} board.cards - array of json objects representing a trello cards  see example/board-cards.json 
 * @param {array} lists  - array list of json list objects, representing trello lists see ./examples/board-lists.json 
 */
function parseTrelloResponseFoCards(board, lists, destFolder){
    // fs.writeFileSync(`${destFolder}/${listName}/SUMMARY.md`, '# Summary\n\n')

    board.cards.forEach((card, index)=>{
        var listName = returnListNameFromCard(card, lists);
        if(listName !== undefined){
            console.log(listName);
            var content = `${card.desc}\n\n---\n\n`
            content+= `[Link to trello card: ${card.name}](${card.shortUrl})\n\n`;
            content+=`##### Labels\n\n`
            content+=`${flattenLabels(card.labels)}`
            fs.writeFileSync(`${destFolder}/${listName}/${sanitize(card.name)}.md`, content)
        }
    });
}   

/**
 * helper functions 
 * @param {*} labels - see example/board-cards.json  
 */
function flattenLabels(labels){
    var result = ""
    labels.forEach((label)=>{
        result+=`${label.name}, `;
    })
    return result;
}

function returnListNameFromCard(card, lists){
    var result;
    lists.forEach((oneListItem)=>{
       if(card.idList === oneListItem.id){
           result =  oneListItem.name;
       }
    })
    return result;
}


function createDirIfDoesntExist(dir){
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}


module.exports = trelloToMarkdownFolders;