/* Question number 1: print out all odd numbers between 10 and 40.
Write two solutions: one with a while loop and another with a for loop. */

// With while loop
/*
i = 10;
while (i <= 40) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
*/

/*
// With for loop
i = 10;
for (; i <= 40; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
*/



/* Question number 2: Write a function printReverse() that takes an array as an argument
and prints out the elements in the array in reverse order on the browser's JavaScript console.
(don't actually reverse the array itself) */

/*
function printReverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}
printReverse([1, 2, 3, 4]);
*/



/* Question number 3: Create an array of movie objects. Each movie should have a
title, rating, and hasWatched properties. Iterate through the array and print
out something that looks like: 

You have watched "In Bruges" - 5 stars
You have not seen "Frozen" - 4.5 stars
You have seen "Mad Max Fury Road" - 5 stars
You have not seen "Les Miserables" - 3.5 stars
*/

/*
let movies = [
    { title: "In Bruges", rating: 5, hasWatched: true },
    { title: "Frozen", rating: 4.5, hasWatched: false },
    { title: "Mad Max Fury Road", rating: 5, hasWatched: true },
    { title: "Les Miserables", rating: 3.5, hasWatched: false }
]

for (let i = 0; i < movies.length; i++) {
    if (movies[i].hasWatched) {
        console.log(`You have watched "${movies[i].title}" - ${movies[i].rating} stars`);
    } 
    else {
        console.log(`You have not seen "${movies[i].title}" - ${movies[i].rating} stars`);
    }
} */



/* Question number 4: Write a function isUniform() which takes an array as an
argument and returns true if all elements in the array are identical.
Otherwise, it should return false. */

/*
function isUniform(array) {
    let flag = true;
    for (let i = 1; i < array.length; i++) {
        if (array[0] === array[i]) {
            continue;
        }
        else {
            console.log(false);
            let flag = false;
        }
    }   
    if (flag === true) {
        console.log(true);
    }
}
array = [1, 1, 1, 1];
isUniform(array); 
*/



/* Question number 5: Write a function sumArray that accepts an array of numbers
and returns the sum of all numbers in the array. */

/*
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumArray([10, 3, 10, 4])); */



/* Question number 6: Write a function palindrome() that takes a string as an argument
and returns true if the string is a palindrome, and false otherwise. A palindrome
is a word, phrase, or sequence that reads the same backward as forward.*/

function palindrome(w) {
    array = w.split("").reverse().join("");
    if (w === array) {
        return true;
    } else {
        return false;
    } 
}

console.log(palindrome("racecar")); 