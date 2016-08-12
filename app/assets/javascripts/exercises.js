// // // Exercise #1:

// // Do the NASA countdown through the console. That is, the console should say:

// // 10
// // 9
// // 8
// // 7
// // 6
// // 5
// // 4
// // 3
// // 2
// // 1
// // BLASTOFF!

// for(var i = 10; i >= 0; i-- ){
//   if(i === 0){
//     console.log("BLASTOFF!");
//   }
//   else{
//     console.log(i);
//   }
// }

// // Hint: Use a for loop!

// // // Exercise #2:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// for(var i = 0; i < numbers.length; i++){
//   console.log(numbers[i]);
// }

// // Write some code that prints all the numbers in the 'numbers' array to the console.

// // Hint: Use a for loop!

// // // Exercise #3:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// var average = 0;

// for(var i = 0; i < numbers.length; i++){
//   average += numbers[i];
// }

// console.log(average/numbers.length);

// // Write code that finds the average of all the numbers in the 'numbers' array.
// // Hint: Use a for loop!

// // // Exercise #4:

// for(var i = 1; i <= 100; i++){
//   if(i % 15 == 0){
//     console.log("FizzBuzz");
//   }
//   else if(i % 5 == 0){
//     console.log("Buzz");
//   }
//   else if(i % 3 == 0){
//     console.log("Fizz");
//   }
//   else{
//     console.log(i);
//   }
// }

// // Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// // But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
// // For numbers which are multiples of both three and five print "FizzBuzz".

// // Hint: See other hints!

// // // Exercise #5:

// var userGuess;

// var randNum = Math.floor((Math.random() * 100) + 1);

// while(userGuess !== randNum){
//   userGuess = prompt("Guess a number:");
//   userGuess = parseInt(userGuess)

//   if(userGuess > randNum){
//     console.log("Guess is too high");
//   }
//   else if(userGuess < randNum){
//     console.log("Guess is too low");
//   }
//   else{
//     console.log("Guess is correct");
//   }
// }



// // Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
// // For example:
// // var guess = prompt("Guess a number");

// // // Exercise #6:

// function sumNum(num1, num2){
//   return num1 + num2;
// }

// sumNum(3,4);

// // Create a function that accepts two numbers as parameters and returns their sum.

// // // Exercise #7:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// function arraySum(array){
// var sum = 0;

//   for(var i = 0; i < array.length; i++){
//     sum += array[i];
//   }

// return sum/array.length;  
// }

// console.log(arraySum(numbers));

// // Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)

// // // Exercise #8:

// // Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.

// function Book(title, author, isbn, pages, yearOfPublication){
//   this.title = title;
//   this.author = author;
//   this.isbn = isbn;
//   this.pages = pages;
//   this.yearOfPublication = yearOfPublication;
//   this.printBook = function(){
//     return title + " " + author + " " + isbn + " " + pages + " " + yearOfPublication;
//   }
// }

// var test = new Book("stuff", "sdfgh", "123456", "98765", "1234");

// console.log(test);

// // // Exercise #9:

function Book(t, a, i, p, y){
  this.title = t;
  this.author = a;
  this.isbn = i;
  this.pages = p;
  this.yearOfPublication = y;
  this.printBook = function(){
    return title + " " + author + " " + isbn + " " + pages + " " + yearOfPublication;
  }
}

var test = new Book("stuff", "sdfgh", "123456", "98765", "1234");

console.log(test.printBook());

// // Add a function to the above book object that console.logs out all the above information 

// // // Extra exercises can be found here: http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html 


