// Exercise #1
// Write your solution below

var content = '';

for (var i = 0; i < 7; i++) {
    content = content + '#';
    console.log(content);
}

/* 
Write your explanation for Exercise #1 here 
This code works because we have a set size for the pyramid and a starting point through the loop provided. we are able to use the content + # as a way to build out the steps of our pyramid.


*/


// Exercise #2
// Write your solution below

function isEven(number) {
    if (number%2 == 0)
    return true;
else
    return false;
}
/* 
Write your explanation for Exercise #2 here

Javascript has a modulus operator %, which finds the remainder of a division. if there is no remainder after dividing by 2 the number is even. 

*/
