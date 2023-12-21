var censorewords=["apple","mango","grapes"];
var customCensoredWords=[ ];
function censor (instr) {
     for( idx in censoredWords){
       instr = instr.replace(censoredWords[idx], "****");
     }
     return instr;
}
function addCensoredWord(word){
     customCensoredWords.push(word);
}
function getCensoredwords(word){
     return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;