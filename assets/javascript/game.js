/*
 make a list of words in an array
 pick a word to give to player
 allot right number of dashes for the selected word
 take guessed letter and compare to all the letter in the selected word
    if matches replace appopriate _ with the correct letter
    else subrtract from lives and add letter to "Guessed List"
if 9 lives are lost, game is over, if all the letters have been guessed game has been won. 

*/



var words = ["ball", "cat", "dog", "animal"];
var userGuess= "a"; // need to change this to user input ***********************


var compChoice = words[Math.floor(Math.random() * words.length)];
console.log(compChoice);

for(var i=0; i< compChoice.length; i++) {       // initializes dashes for zero guesses
 document.write("___  ");
}


var n = compChoice.includes(userGuess);

if(n){
    console.log("you got a match");
}
else {
    console.log("you don't have a match");
}


//var n = str.includes("world", 7);// definetely will need this
//  var res = str.charAt(0)






