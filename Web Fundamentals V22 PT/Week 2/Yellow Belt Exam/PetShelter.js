function hide(element) { // remove donate btn//
    element.remove();
}

function option(select) {  //display option in the alert//
    alert("You are searching for a: " + select.options[select.selectedIndex].text);
}

var pets = [3, 5, 8];
var btns = [
    document.querySelector("#name1"),
    document.querySelector("#name2"),
    document.querySelector("#name3")
];

function givePet(id) {
    pets[id]++;
    btns[id].innerHTML = pets[id] + " petting(s)";
}