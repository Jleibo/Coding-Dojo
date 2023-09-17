function myBirthYearFunc(){ // When this function is run it will display the stored data and read 'I was born in 1980'
    console.log("I was born in" + 1980); // here is the stored output of the function as a mixed line of text and numeric values
}
myBirthYearFunc();// this line tells the code to run the function.
// I was born in 1980

function myBirthYearFunc(birthYearInput){ //this function is recalling data
    console.log("I was born in" + birthYearInput); // giving the code instructions on what to write
}
myBirthYearFunc(1980) //gives value to birthYearInput = 1980
//  I was born in 1980

function add(num1, num2){//function's purpose is to add numbers
    console.log("Summing Numbers!"); // this is the first line that will apppear in the terminal
    console.log("num1 is: " + num1); // this instructs the code to write out the text 'num1 is (num1 value here)' since no value has been assigned to num1 at this time
    console.log("num2 is: " + num2); // this line instructs the code to write out the text 'num2 is (num2 value here)' since no value has been assigned to num2 at this time
    var sum = num1 + num2; // this line sets the variable 'sum' to value of num1 plus the value of num2
    console.log(sum); //tells the code to log the answer to num1 plus num2
}
add(10, 20); // this line gives value to num1 = 10 and num2 = 20
//30