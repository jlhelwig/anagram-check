// a friend said he had a whiteboard interview question:
//'create a function that check two words, see if they are anagrams'
//my initial reaction was: I think I could do that!


function myFunction(aide,idea){
let done=aide.split('');
let node=idea.split('');
  if (done.sort().join('')===node.sort().join('')){
    return console.log(aide +' is an an anagram of ' +idea)
  }
  return console.log(aide +' is not an an anagram of ' +idea);
}



myFunction('notes', 'snotes');//not!
myFunction('ides','side'); //it's an ana!
