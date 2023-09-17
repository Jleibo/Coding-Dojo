function howMuchLeftOverCake(result) {
    if (result == 0) {
        console.log("No leftovers for you!");
    }
    if (result <= 2 && result >= 1) {
        console.log("You have some leftovers");
    }
    if (result >= 3 && result <= 5) {
        console.log("You have leftovers to share");
    }
    if (result > 5) {
        console.log("Hold another party!");
    }
}
    var numberofPieces = 12;
    var numberOfPeople = 5;
    var result = (numberofPieces % numberOfPeople);
    console.log(result + " leftovers");
    howMuchLeftOverCake(result);

