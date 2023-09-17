var homeWorkStatus = "Done"
var time = 1705
var Day = "Wednesday"

if (homeWorkStatus === "Done"){
    if (time < 1000) {
        console.log("I want a Latte");
    }
    }
    if (time > 1000 && time < 1500){
        console.log("I want Hot Chocolate");
    }
    if (time >= 1500 && time <= 1800){
        if (time % 2 == 0 && Day === "Wednesday"){
                console.log("I want Stawberry Ice Cream");
            }
        if (Day === "Monday" || "Tuesday" || "Thursday" || "Friday" || "Saturday" || "Sunday"){
                console.log("I want Vanilla Ice Cream");
            }
        }
        else{
            console.log("I want Hot Chocolate");
    }
    if (time > 1800 && time < 2200){
        if (Day === "Wednesday"){
            console.log("I want Stawberry Ice Cream");
        }
        else{
            console.log("I want Vanilla Ice Cream");
        }
    }
    if (time > 2200){
        console.log("I want to sleep");
    }