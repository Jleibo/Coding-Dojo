var arr1 = [8,6,7,5,3,0,9];

for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}




var arr2 = [4,7,13,13,19,37,-2];
var sum = 0

for (var x = 0; x < arr2.length; x++){
    sum = sum + arr2[x];
    console.log(arr2[x]);
    console.log(sum);
}

var arr3 = [6,2,12,14,-24,5,0];

for (var z = 0; z < arr3.length; z++){
    if (arr3[z] > 5){
        console.log(arr3[z]);
    }
    else arr3[z] = "No Dice"
}