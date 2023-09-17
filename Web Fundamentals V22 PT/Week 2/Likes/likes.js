var count = 9;
countElement = document.querySelector("#count");
console.log(countElement);
function add(element) {
    console.log("its working!")
    count++
    countElement.innerText = count + " like(s)"
}

var count1 = 12;
count1Element = document.querySelector("#count1");
console.log(count1Element);
function add1(element) {
    console.log("its working1!")
    count1++
    count1Element.innerText = count1 + " like(s)"
}

var count2 = 9;
count2Element = document.querySelector("#count2");
console.log(count2Element);
function add2(element) {
    console.log("its working2!")
    count2++
    count2Element.innerText = count2 + " like(s)"
}