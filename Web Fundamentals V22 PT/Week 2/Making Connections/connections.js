var cardName = document.querySelector("#cardName");
var reqsSpan = document.querySelector("#reqs");
var friendsSpan = document.querySelector("#friends");

function nameSwap() {
    cardName.innerText = "Aspen Leibovitz";
}

function addFriend(id) {
    var element = document.querySelector(id);
    element.remove();
    reqsSpan.innerText--;
    friendsSpan.innerText++;
}

function ignoreFriend(id) {
    var element = document.querySelector(id);
    element.remove();
    reqsSpan.innerText--;
}
