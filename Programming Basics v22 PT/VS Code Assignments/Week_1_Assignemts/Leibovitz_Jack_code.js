function greeting(){
    return "Hello World"; //
}
var word = greeting();
console.log();


function greeting() { //added a space between () and {
    return "Hello World"; // this line is fine
} //this line is fine
var word = greeting(); // this line is fine
console.log(word); //added the variable that needs to be logged for program to spit out "Hello World"