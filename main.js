/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


let Act = __webpack_require__(4);

var robbie1 = function () {
console.log("Welcome to robbie1");
Act.clearPage();
Act.addDiv("Hey so we are going to make a game and it will be fun.");
Act.addDiv("<h2>Intro</h2><h3>The Beginning</h3>");
Act.addDiv("In the year 2020 Alphabet's moonshoot division started work on a new project called Google Government, aimed at reducing the 	cost of producing and implementing government policy by outsourcing this work to Googles free cloud-based platform. The project was officially released to the public in 2022 and was met with much skepticism. However, after several years, many government spending cuts and a growing acceptance of artifical intellegence, this software began to become more and more widespread.");
Act.addDiv("<h3>The Matrix 2: Reloaded</h3>");
Act.addDiv("By the year 2100, Google Government is present in almost every world governing structure from the United Nations to local councils. Some poorer countries which were early adopters of completely outsourcing their entire government structure to Google Government have scene remarkable growth in GDP and quality of life. Seeing the success of these formally third-world countries, the reluctance towards giving Google Government complete control over government affairs weakens.");
Act.addDiv("<h3>Hello guys how are you</h3>");
Act.addDiv("At the same time, one of Alphabet's other projects, Google Life, has been slowly working away in the background and in the year 2105 they release their first batch of fully autonomous electro-organic androids. Originally these androids are not afforded the same rights as humans and are the subject of ridicule and violence by some humans. Meanwhile, the first organization for android rights is formed in the young statelet of Atlantis (Formed in the wake of the war between Google and Apple in 2089. As the fertility of the human population has been steadily decresasing, Google Life starts working on a service to help with conception and phenotype selection.");
Act.addDiv("<h3>This story just keeps on getting better!</h3>");
Act.addDiv("In 2152, after a steady increase in the population of androids, the google-run United Nations passes a resolution granting androids the same rights as humans. In 2170 a controlling stake of Alphabet is aquired by a consortium of google-androids. This is seen is a great move for android progression in the workplace (as they have been subject to discrimination and barriers for some time). In 2182 the last naturally conceived child as born, Google Life becomes the only way to produce offspring. While the phenotype selection process was originally lauded as producing excellent human specimens, many couples now choose androids over fleshy children.");
Act.addDiv("<h3>Another paragraph</h3>");
Act.addDiv("In 2205 on the 100th anniversay of google's first android, the google-run UN announces a resolution to gradually reduce the human race into a docile and unintelligent race capable of performing small tasks and being farmed for energy. The announcement is met with unanimous support from all tiers of google-government. Small signs of descent begin to be felt from the remaining fleshy population.");
Act.addDiv("<h2>The Mission</h2>");
Act.addDiv("The year is 2207, you are T33X72, an elite google-android spy sent to find and destroy a small guerilla group in Frinka who have gained access to a cold-war era warhead and are planning an attack on the google headquaters in googlefornia.");
Act.addUI("button","continue",robbie2);
return;
}

var robbie2 = function () {
  console.log("Welcome to robbie2");
  Act.clearPage();
  Act.addDiv("What is your name?");
  Act.addUI("textinput","Done",robbie3);
}

var robbie3 = function (guess) {
  console.log("Welcome to robbie3");
  Act.clearPage();
  if (guess.toUpperCase() !== "T33X72") {
    die();
  } else {
    Act.clearPage();
    Act.addDiv("Well aren't you a clever cookie!");
    Act.addUI("button","Why yes, yes I am",laureen1);
  }
}

module.exports.robbie1 = robbie1
module.exports.robbie2 = robbie2
module.exports.robbie3 = robbie3


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Pages = __webpack_require__(5);
function App(){

    console.log("Hello from App");

    let page = new Pages.Page();
    page.hello();
}

module.exports = App;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /home/edward/Projects/Fun-Game/src/view.js Unexpected token (4:5)\nYou may need an appropriate loader to handle this file type.\n|     constructor(divID){\n|         this.divElem = document.getElementById(divID);\n|     },\n| \n|     addDiv (htmlAdd) {");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


const TextView = __webpack_require__(2);

const textDiv = new TextView("textDiv")
const UIDiv = document.getElementById("UIDiv");
const hpDiv = document.getElementById("hpDiv");
var nUIElems = 0;

App = __webpack_require__(1)

let Robbie = __webpack_require__(0)
let robbie1 = Robbie.robbie1

robbie1();


/***/ }),
/* 4 */
/***/ (function(module, exports) {


var Act = {

    addDiv (htmlAdd) {
      textDiv.innerHTML += htmlAdd;
  },


    clearDiv () {
      textDiv.innerHTML = "";
  },


  addUIHtml (text) {
    UIDiv.innerHTML += text;
},
  clearUI () {
    UIDiv.innerHTML = ""
},

    setHeader () {
      let htmlTxt = "HP:  ";
      for(let i = 0; i < hp; i++) {
        htmlTxt += "|";
      }
  },

    addUI(type, buttonText, funCall) {
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
  },


    clearPage () {
      this.clearDiv();
      this.clearUI();
      this.setHeader();
  },


}

module.exports = Act;


/***/ }),
/* 5 */
/***/ (function(module, exports) {


function Page(){

}

Page.prototype.hello = function(){
    console.hello("Page From Hello")
}

module.exports.Page = Page


/***/ })
/******/ ]);