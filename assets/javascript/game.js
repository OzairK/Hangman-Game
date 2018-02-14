/*
 make a list of words in an array
 pick a word to give to player
 allot right number of dashes for the selected word
        -store right number of dashes in to an array
 take guessed letter and compare to all the letter in the selected word
        -check if userguess is included in compChoice. using .includes
                for(which index is the letter in? using .charat)
                    which index is the letter in? using .charat
                    replece that index in the array with that letter)
                print that arry
        else: add letter to badGuesses array using push
    if matches replace appopriate _ with the correct letter
    else subrtract from lives and add letter to "Guessed List"
if 9 lives are lost, game is over, if all the letters have been guessed game has been won. 

*/

//var words = ["architect", "paris", "luna", "latte", "beans"];

var words = ["Harden", "Ariza", "Paul", "Olajouwon", "Sampson", "Ming", "Capela"];
var userGuess = "";
var userGuessLowerCase = "";
var guessedSoFar = [];
var guessedSoFarString = "notWinningYet";
var compChoice = "";
var compChocieLowerCase = "";
var compChoice2 = "pixel11";
var badGuess = [];
var lives = 10;


document.onkeyup = function (event) {


    if (event.keyCode === 13) {                                                // initialize game       
        compChoice = words[Math.floor(Math.random() * words.length)];
        compChoice2 = compChoice;
        guessedSoFar = [];
        console.log(compChoice);
        for (var i = 0; i < compChoice.length; i++) {                       // initializes dashes for zero guesses
            if (compChoice.charAt(i) === " ") {
                guessedSoFar.push("    ");
                console.log("hi");
            }
            else {
                guessedSoFar.push("  ____  ");
            }
        }
        document.querySelector("#game").innerHTML = guessedSoFar.join("");

        guessedSoFarString = "notWinningYet";
        lives = 10;
        badGuess = [];
        var html = "";
        document.querySelector("#results").innerHTML = html;
        document.querySelector("#score").innerHTML = "Guessed So Far: ";
        var newLivesDiv = document.createElement("div"); 
        newLivesDiv.innerHTML = "Lives: 10";
        score.appendChild(newLivesDiv); // adds it on the page 



    }

    else {                                                                      // if not intializing then in game
        userGuess = event.key;


        if (!/[^a-zA-Z]/.test(event.key)) {                                     // is it a letter?

            var html = "";
            document.querySelector("#directions").innerHTML = html;

            compChocieLowerCase = compChoice.toLowerCase();                     // to handle upper case letters
            userGuessLowerCase = userGuess.toLowerCase();

            if (compChocieLowerCase.includes(userGuessLowerCase)) {
                for (var i = 0; i < 100; i++) {                                 // adding correct guess
                    if (compChocieLowerCase.includes(userGuessLowerCase)) {
                        var pos = compChocieLowerCase.indexOf(userGuessLowerCase);
                        guessedSoFar[pos] = compChoice.charAt(pos);             // getting from original choice to disply capital letters
                        document.querySelector("#game").innerHTML = guessedSoFar.join("");
                        compChocieLowerCase = compChocieLowerCase.replace(userGuessLowerCase, "_");       // corrupting compChoice so that it doesnt keep saying it include user guess
                    }
                    else {                                                      // all correct guesses have been added exit loop
                        i = 100;
                    }
                }
            }

            else {
                if (!/[^a-zA-Z]/.test(userGuess)) {                             // bad guess, add to wrong letter guesses
                    lives = lives - 1;
                    badGuess.push(userGuess + "  ");
                    document.querySelector("#score").innerHTML = "Guessed So Far: " + badGuess.join("");
                    var newLivesDiv = document.createElement("div");             // creating a new element to display lives within score div
                    newLivesDiv.innerHTML = "Lives: " + lives;
                    score.appendChild(newLivesDiv); // adds it on the page 
                }
            }



            guessedSoFarString = guessedSoFar.toString();                       // converting to array to sting to see if user has won.

            for (var i = 0; i < 100; i++) {                                     // get rid of the commas for a proper comapre
                if (guessedSoFarString.includes(",")) {
                    guessedSoFarString = guessedSoFarString.replace(",", "");
                }
                else {
                    i = 100;
                }

            }




            if (guessedSoFarString === compChoice2) {                           // has user won?
                guessedSoFar = [];
                var html = "you win!!!";
                guessedSoFarString = "Not Winning Yet";
                document.querySelector("#results").innerHTML = html;
            }



            if (lives === 0) {                                                  // has looser lost?

                var html = "You Loose!! :(";
                document.querySelector("#results").innerHTML = html;


            }
        }


        else {
            var html = "Directions:  please pick a letter";                     // please pick a letter
            document.querySelector("#directions").innerHTML = html;
        }

    }

}



//var n = str.includes("world", 7);// tells you if that if string is contained
//  var res = str.charAt(0)
//var pos = str.indexOf("locate",5)// tells you what is the index of the string

/* You can split on an empty string:

var chars = "overpopulation".split('');
If you just want to access a string in an array-like fashion, you can do that without split:

var s = "overpopulation";
for (var i = 0; i < s.length; i++) {
    console.log(s.charAt(i));
} */







