// a friend said he had a whiteboard interview question:
//'create a function that check two words, see if they are anagrams'
//my initial reaction was: I think I could do that!


function myFunction(aide,idea){
//first sort them, then compare them... first make them an array
let done=aide.split('');
let node=idea.split('');
// check it out
console.log(done,node);
    if (done.sort().join('')===node.sort().join('')){
      return console.log('its an anagram!')
    }

    return console.log('nope!');
}

myFunction('notes', 'snotes');//not!
myFunction('ides','side'); //it's an ana!
