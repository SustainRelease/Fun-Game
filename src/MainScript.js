var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");

function setDiv (htmlSet) {
  div1.innerHTML = htmlSet;
}
function addDiv (htmlAdd) {
  div1.innerHTML += htmlAdd;
}
function clearDiv () {
  div1.innerHTML = "";
}

function setButton1 (text, funCall) {
  div2.innerHTML = '<button type="button" onclick="' + funCall.name + '();">' + text + '</button>';
}
function setButton2 (text, funCall) {
  div2.innerHTML += '<button type="button" onclick="' + funCall.name + '();">' + text + '</button>';
}
function clearButtons () {
  div2.innerHTML = "";
}

function clearPage () {
  clearDiv();
  clearButtons();
}

die = function () {
  clearPage();
  setDiv("<h1>Your're dead!</h1>");
};

win = function () {
  clearPage();
  setDiv("<h1>You win!</h1>");
};

robbie1();