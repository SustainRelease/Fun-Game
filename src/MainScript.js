const textDiv = document.getElementById("textDiv");
const UIDiv = document.getElementById("UIDiv");
const hpDiv = document.getElementById("hpDiv");
var nUIElems = 0;
var hp = 100;

function addDiv (htmlAdd) {
  textDiv.innerHTML += htmlAdd;
}
function clearDiv () {
  textDiv.innerHTML = "";
}
function setHeader () {
  let htmlTxt = "HP:  ";
  for(let i = 0; i < hp; i++) {
    htmlTxt += "|";
  }
  hpDiv.innerHTML = htmlTxt;
}
  

function addUI(type, buttonText, funCall) {
  console.log(type.toLowerCase());
  switch(type.toLowerCase()) {
    case "button":
      butID = "but"+nUIElems;
      addUIHtml("<button id = '" + butID + "'>" + buttonText + "</button>");
      let elem = document.getElementById(butID);
      elem.addEventListener('click',funCall);
      nUIElems++;
      break;
    case "textinput":
      textID = "text"+nUIElems;
      butID = "but"+nUIElems;
      addUIHtml("<input type='text' id='" + textID + "'></input>" +
                "<button id = '" + butID + "'>" + buttonText + "</button>");
      let butElem = document.getElementById(butID);
      let textElem = document.getElementById(textID);
      butElem.addEventListener('click', () => {
        funCall(textElem.value);
      });
      nUIElems++;
      break;
    default:
      new error("Invalid UI element type");
  }
}
function addUIHtml (text) {
  UIDiv.innerHTML += text;
}
function clearUI () {
  UIDiv.innerHTML = "";
}

function clearPage () {
  clearDiv();
  clearUI();
  setHeader();
}

die = function () {
  hp = 0;
  clearPage();
  addDiv("<h2>You're dead!</h2>");
};

win = function () {
  clearPage();
  addDiv("<h2>You win!</h2>");
};

robbie1();