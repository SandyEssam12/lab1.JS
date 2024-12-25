// //Ex 1
// function alphabet_position(str) {
//     var text = str.split(' ').join('');
//     var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
//     out = [];
//     for (var i = 0; i < text.length; i++) {
//         var char = text.charAt(i).toLowerCase();
//         if (alphabet.indexOf(char) > -1) {
//             out.push(alphabet.indexOf(char) + 1);
//         }
//     }
//     console.log(out);
// }
// alphabet_position("The sunset sets at twelve o' clock.");

//________________________________________________________________

// //Ex 2
// function sort(text){
//    if(!text)
//     console.log("empty string"); 
//    var word=text.split(' ');
//    var out=word.sort((a, b) => a.match(/\d/)[0] - b.match(/\d/)[0]);
//    console.log(out.join(' ')); 
// }
// sort("is2 Thi1s T4est 3a");
// sort("4of Fo1r pe6ople g3ood th5e the2");
// sort("");

//________________________________________________________________

// //Ex 3
// function specialMultiply(x, y) {
//     if (parseInt(x) && parseInt(y)) {
//         var out = x * y;
//         console.log(out);

//     }
//     else
//         return function (y) {
//             var out = x * y;
//             console.log(out);
//         };

// }
// specialMultiply(5, 3);
// specialMultiply(5)(3);
// specialMultiply(5);

//________________________________________________________________

// //Ex 4
// function guessingGame(amount) {
//     var answer = Math.floor(Math.random() * 11);
//     var guesses = 0;

//     return function (guess) {
//         if (guesses >= amount) {
//             return `No more guesses, the answer was ${answer}`;
//         }

//         guesses++;

//         if (guess === answer) {
//             return "You got it!";
//         } else if (guess > answer) {
//             return "Your guess is too high!";
//         } else {
//             return "Your guess is too low!";
//         }
//     };
// }

// var game=guessingGame(3);




