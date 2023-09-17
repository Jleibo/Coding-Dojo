var arrOdd = ["Hot Chocolate", "Tea", "Cake"]
var arrEven = ["Ice Cream", "Cookies", "Candy"]
var homeWorkStatus = "Done"
var time = 1705
var day = "Wednesday"
var rando = Math.floor(Math.random()*2)

if (homeWorkStatus === "Done"){
    if (time < 1000){
        console.log("I want a Latte");
    }
    }
    if (time > 1000 && time < 1500){
        console.log("I want Hot Chocolate");
    }
    if (time >= 1500 && time <= 1800){
        Math.floor(Math.random()*2)
        if (rando % 2 == 0){
            console.log(arrEven[rando])
        }
        else {
            console.log(arrOdd[rando])
        }
    }
    if (time > 1800 && time < 2200){
        if (day === "Wednesday"){
            console.log("I want Stawberry Ice Cream");
        }
        else{
            console.log("I want Vanilla Ice Cream");
        }
    }
    if (time > 2200){
        console.log("I want to sleep");
    }