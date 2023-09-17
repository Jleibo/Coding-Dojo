function splitEvensAndOdds(){
    let initialArray = [1,2,3,4,5]
    let evenNumbers = []
    let oddNumbers = []

    for (var x = 0; x < initialArray.length; x++){
        if (x % 2 === 0){
            evenNumbers.push(x);
        }
        if (x % 2 === 1){
            oddNumbers.push(x);
        }
    }
}



function splitEvensAndOdds(){
    let initialArray = [1,2,3,4,5]
    let evenNumbers = []
    let oddNumbers = []

    for (var x = 0; x < initialArray.length; x++){
        if (initialArray[x] % 2 == 0){
            evenNumbers.push(initialArray[x]);
        } else {
            oddNumbers.push(initialArray[x]);
        }
    }
    console.log(evenNumbers, oddNumbers)
}
splitEvensAndOdds()

function splitEvensAndOdds(initialArray){ //initialArray is not defined
    let evenNumbers = []
    let oddNumbers = []

    for (var x = 0; x < initialArray.length; x++){
        if (initialArray[x] % 2 == 0){
            evenNumbers.push(initialArray[x]);
        } else {
            oddNumbers.push(initialArray[x]);
        }
    }
    console.log(evenNumbers, oddNumbers)
}
splitEvensAndOdds([1,2,3,4,5,6]) // gets sent to initialArray parameter