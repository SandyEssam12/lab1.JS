/*EX1
var num1 = -7, num2 = 3, num3 = 2;

alert("the result is ");
if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        alert(`${num1}, ${num2}, ${num3}`);
    }
    else
        alert(`${num1}, ${num3}, ${num2}`);
}
else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        alert(`${num2}, ${num1}, ${num3}`);
    }
    else
        alert(`${num2}, ${num3}, ${num1}`);
}
else if (num3 > num1 && num3 > num2) {
    if (num1 > num2) {
        alert(`${num3}, ${num1}, ${num2}`);
    }
    else
        alert(`${num3}, ${num2}, ${num1}`);
}
else
    alert("I can't sort ");
*/
/*EX2
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        console.log("FizzBuzz");
    else if (i % 3 === 0)
        console.log("Fizz");

    else if (i % 5 === 0)
        console.log("Buzz");
    else
        console.log(i);
}
*/

/*EX3
var sum=0;
for (i = 1; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        sum+=i;
}
console.log(sum);
*/


function Game() {
    var random = Math.floor(Math.random() * 10) + 1;
    var max = 3;
    var trys = 0;

    while (trys < max) {
        var guess = prompt("Guess the number (1-10):");

        if (isNaN(guess) || guess < 1 || guess > 10) {
            alert("Please enter a valid number between (1-10).");
            continue;
        }

        guess = parseInt(guess);

        if (guess === random) {
            alert("Good Work");
            return;
        } else {
            trys++;
            if (trys === max) {
                alert("Game over");
                return;
            } else {
                if (!confirm("Wrong guess. Want to try again?")) {
                    alert("Thanks for playing!");
                    return;
                }
            }
        }
    }
}

Game();
