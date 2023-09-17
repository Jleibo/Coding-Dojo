var popup = document.querySelector(".bottom-popup");

function hide() {
    popup.remove();
    
    console.log("does this work");
}

function changetemp(num) {
    return Math.round (9/5 * num + 32);
}

function changeback(num) {
    return Math.round (5/9 * (num - 32));
}

function convert(element) {
    console.log(element.value);
    for(var x = 1; x <= 8; x++) {
        var something = document.querySelector("#num" + x);
        var other = parseInt(something.innerText);
        if (element.value == "2") {
            something.innerText = changetemp(other);
        }
        else {
            something.innerText = changeback(other);
        }
    }
}
