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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {



class ViewElement {
    constructor(element, singleton){
        if(singleton === true){
            this.divElem = document.getElementById(element);
        }else{
            this.divElem = document.getElementByClass(element);
        }
    }

    add (htmlAdd) {
      this.divElem.innerHTML += htmlAdd;
    }

    clear () {
        this.divElem.innerHTML = "";
     }

}

module.exports.ViewElement = ViewElement;


class ControlPanel extends ViewElement {


    constructor(actions){
        super("control-panel", true);

        this.nUIElems = 0;
        this.actions = actions;
        this.UIElements = {

        }
    }

    addControl(control){
        switch(control.type){
            case "button":{
                //serial button id injection
                let butID = "but"+(this.nUIElems++);

                //append to the controls div
                this.add("<button id = '" + butID + "'>" + control.text + "</button>")

                //set up a callback listener
                let elem = document.getElementById(butID);

                let funCall = this.actions[control.action].bind(this.actions, control.argument)

                elem.addEventListener('click',funCall);

                this.UIElements[butID] = elem;

                break;
            }
            case "textinput":{
                //raw input and go button
              let textID = "text"+this.nUIElems;
              let butID = "but"+this.nUIElems;

              this.add("<input type='text' id='" + textID + "'></input>" +
                        "<button id = '" + butID + "'>" + control.text + "</button>");
              let butElem = document.getElementById(butID);
              let textElem = document.getElementById(textID);

              let funCall = this.actions[control.action].bind(this.actions)

              butElem.addEventListener('click', () => {
                funCall(textElem.value);
              });

              this.nUIElems++;
            }

        }
    }

}

module.exports.ControlPanel = ControlPanel;

class TextPane extends ViewElement{
    constructor(){
        super("text-pane", true)
    }

    addTitle(title){
        this.add(`<h2> ${title} </h2>`)
    }

    addSection(section){
        if(section.title !== undefined){
            this.add(`<h2>${section.title}</h2>`);
            this.add(`<p>${section.text}</p>`);
        }
    }
}

module.exports.TextPane = TextPane;

// class Button extends ViewElement {
//
//     constructor(){
//         super
//     }
//
// }
//
// class TextEntry extends ViewElement {
//     constructor(){
//
//     }
// }


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


const View = __webpack_require__(0);
const HUD = __webpack_require__(8);
const Player = __webpack_require__(9);

class App{
    constructor({series, sequence}){
        this.frame();

        this.player = new Player();

        this.hud = new HUD(this.player);
        this.story = new View.TextPane();
        this.control = new View.ControlPanel(this);
        this.scenes = {}

        this.series = series;
        this.sequence = sequence


        this.currentseries = 0;

    }

    begin(){
        this.currentseries = 0;
        this.next();
    }

    /*
        set up the base level ui
    */
    frame(){

    }

    clearUI(){
        this.story.clear();
        this.control.clear();
    }

    nextSeries(){
        return this.series[this.sequnce[this.currentseries++]].ID
    }

    victory(){
        this.clearUI();
        this.loadScene({
            ID:"victory",
            title:"Well aren't you a clever cookie!",
            welcome:"you have wiped out the resistance gene",
            sections:[],
            controls:[
                {
                    type:'button',
                    action:'next',
                    text:'Why yes, yes I am'
                }
            ]
        })

    }

    defeat(){
        this.player.die();
        this.clearUI();
        this.loadScene({
            ID:"defeat",
            title:"You're dead!",
            welcome:"The Humans have retaken the surface!",
            sections:[],
            controls:[
                {
                    type:'button',
                    action:'reset',
                    argument:'robbie1',
                    text:'try again'
                }
            ]
        })
    }

    progress(sceneID){
        this.clearUI();
        this.loadScene(this.scenes[sceneID]);
    }

    loadScene(scene){
        console.log(scene.welcome);

        if(scene.title != undefined){
            this.story.addTitle(scene.title)
        }

        for(let section of scene.sections){
            this.story.addSection(section);
        }

        for(let control of scene.controls){
            this.control.addControl(control);
        }

        this.hud.update();
    }

    reset(sceneID){
        this.player.reset()
        this.progress(sceneID)
    }

    next(){
        let seriesname = this.sequence[this.currentseries++]

        let scenesInSeries = this.series[seriesname];

        this.scenes = {};
        for(let scene of scenesInSeries){
            this.scenes[scene.ID] = scene;
        }

        this.progress(this.series[seriesname][0].ID);
    }

    enterName(name){
        if (name.toUpperCase() !== "T33X72") {
            this.defeat();
        } else {
            this.victory();
        }
    }
}

module.exports = App;


/***/ }),
/* 2 */
/***/ (function(module, exports) {


module.exports = [{
    ID:'Dylan1',
    title:"Dylan's part of the game",
    welcome:"Welcome to Dylans Part",

    sections:[],
    controls:[{
        type:'button',
        action:'next',
        text:"continue"
    }]
}]


/***/ }),
/* 3 */
/***/ (function(module, exports) {


module.exports = [{
    ID:'Edward1',
    title:"Edward's part of the game",
    welcome:"Welcome to Edwards Part",

    sections:[],
    controls:[{
        type:'button',
        action:'next',
        text:"continue"
    }]
}]


/***/ }),
/* 4 */
/***/ (function(module, exports) {


module.exports = [{
    ID:'laureen1',
    title:"Laureen's part of the game",
    welcome:"Welcome to Laureens Part",

    sections:[],
    controls:[{
        type:'button',
        action:'next',
        text:"continue"
    }]
}]


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/*
    A scene is loaded by the the app, it should be drawn from a serial format,
    for now a serialiable object
*/

var robbie1 = {
    ID:"robbie1",
    welcome:"Welcome to robbie1",
    title:"Intro",
    sections:[
        {
            title:"The Beginning",
            text:"In the year 2020 Alphabet's\
         moonshoot division started work on a new project called \
         Google Government, aimed at reducing the 	cost of producing\
          and implementing government policy by outsourcing this work \
          to Googles free cloud-based platform. The project was officially \
          released to the public in 2022 and was met with much\
           skepticism. However, after several years, many government\
            spending cuts and a growing acceptance of artifical\
             intellegence, this software began to become more\
              and more widespread."
        },
        {
            title:"The Matrix 2: Reloaded",
            text:"By the year 2100, Google Government is present in almost every world governing structure from the United Nations to local councils. Some poorer countries which were early adopters of completely outsourcing their entire government structure to Google Government have scene remarkable growth in GDP and quality of life. Seeing the success of these formally third-world countries, the reluctance towards giving Google Government complete control over government affairs weakens."
        },
        {
            title:"Hello guys how are you",
            text:"At the same time, one of Alphabet's other projects, Google Life, has been slowly working away in the background and in the year 2105 they release their first batch of fully autonomous electro-organic androids. Originally these androids are not afforded the same rights as humans and are the subject of ridicule and violence by some humans. Meanwhile, the first organization for android rights is formed in the young statelet of Atlantis (Formed in the wake of the war between Google and Apple in 2089. As the fertility of the human population has been steadily decresasing, Google Life starts working on a service to help with conception and phenotype selection."
        },
        {
            title:"This story just keeps on getting better!",
            text:"In 2152, after a steady increase in the population of androids, the google-run United Nations passes a resolution granting androids the same rights as humans. In 2170 a controlling stake of Alphabet is aquired by a consortium of google-androids. This is seen is a great move for android progression in the workplace (as they have been subject to discrimination and barriers for some time). In 2182 the last naturally conceived child as born, Google Life becomes the only way to produce offspring. While the phenotype selection process was originally lauded as producing excellent human specimens, many couples now choose androids over fleshy children."
        },{
            title:"Another paragraph",
            text:"In 2205 on the 100th anniversay of google's first android, the google-run UN announces a resolution to gradually reduce the human race into a docile and unintelligent race capable of performing small tasks and being farmed for energy. The announcement is met with unanimous support from all tiers of google-government. Small signs of descent begin to be felt from the remaining fleshy population."
        },{
            title:"The Mission",
            text:"The year is 2207, you are T33X72, an elite google-android spy sent to find and destroy a small guerilla group in Frinka who have gained access to a cold-war era warhead and are planning an attack on the google headquaters in googlefornia."
        }
    ],

    controls:[
        {
            type:"button",
            text:"Continue",
            action:"progress",
            argument:'robbie2'
        }
    ]
    //
    // Act.addDiv("<h2>Intro</h2><h3>The Beginning</h3>");
    // Act.addDiv("In the year 2020 Alphabet's moonshoot division started work on a new project called Google Government, aimed at reducing the 	cost of producing and implementing government policy by outsourcing this work to Googles free cloud-based platform. The project was officially released to the public in 2022 and was met with much skepticism. However, after several years, many government spending cuts and a growing acceptance of artifical intellegence, this software began to become more and more widespread.");
    // Act.addDiv("<h3>The Matrix 2: Reloaded</h3>");
    // Act.addDiv("By the year 2100, Google Government is present in almost every world governing structure from the United Nations to local councils. Some poorer countries which were early adopters of completely outsourcing their entire government structure to Google Government have scene remarkable growth in GDP and quality of life. Seeing the success of these formally third-world countries, the reluctance towards giving Google Government complete control over government affairs weakens.");
    // Act.addDiv("<h3>Hello guys how are you</h3>");
    // Act.addDiv("At the same time, one of Alphabet's other projects, Google Life, has been slowly working away in the background and in the year 2105 they release their first batch of fully autonomous electro-organic androids. Originally these androids are not afforded the same rights as humans and are the subject of ridicule and violence by some humans. Meanwhile, the first organization for android rights is formed in the young statelet of Atlantis (Formed in the wake of the war between Google and Apple in 2089. As the fertility of the human population has been steadily decresasing, Google Life starts working on a service to help with conception and phenotype selection.");
    // Act.addDiv("<h3>This story just keeps on getting better!</h3>");
    // Act.addDiv("In 2152, after a steady increase in the population of androids, the google-run United Nations passes a resolution granting androids the same rights as humans. In 2170 a controlling stake of Alphabet is aquired by a consortium of google-androids. This is seen is a great move for android progression in the workplace (as they have been subject to discrimination and barriers for some time). In 2182 the last naturally conceived child as born, Google Life becomes the only way to produce offspring. While the phenotype selection process was originally lauded as producing excellent human specimens, many couples now choose androids over fleshy children.");
    // Act.addDiv("<h3>Another paragraph</h3>");
    // Act.addDiv("In 2205 on the 100th anniversay of google's first android, the google-run UN announces a resolution to gradually reduce the human race into a docile and unintelligent race capable of performing small tasks and being farmed for energy. The announcement is met with unanimous support from all tiers of google-government. Small signs of descent begin to be felt from the remaining fleshy population.");
    // Act.addDiv("<h2>The Mission</h2>");
    // Act.addDiv("The year is 2207, you are T33X72, an elite google-android spy sent to find and destroy a small guerilla group in Frinka who have gained access to a cold-war era warhead and are planning an attack on the google headquaters in googlefornia.");
    //
    //
    // Act.addUI("button","continue",robbie2);
}
//

const robbie2 = {
    ID:"robbie2",
    welcome:"Welcome to robbie2",
    title:"",
    sections:[],
    controls:[
        {
            type:"textinput",
            text:"done",
            action:"enterName"
        }
    ]

}


// var robbie2 = function () {
//   console.log("Welcome to robbie2");
//   Act.clearPage();
//   Act.addDiv("What is your name?");
//   Act.addUI("textinput","Done",robbie3);
// }
//
// var robbie3 = function (guess) {
//   console.log("Welcome to robbie3");
//   Act.clearPage();
//   if (guess.toUpperCase() !== "T33X72") {
//     die();
//   } else {
//     Act.clearPage();
//     Act.addDiv("Well aren't you a clever cookie!");
//     Act.addUI("button","Why yes, yes I am",laureen1);
//   }
// }

module.exports = [robbie1, robbie2];


/***/ }),
/* 6 */
/***/ (function(module, exports) {


module.exports = [{
    ID:'William1',
    title:"William's part of the game",
    welcome:"Welcome to Williams Part",

    sections:[],
    controls:[{
        type:'button',
        action:'next',
        text:"continue"
    }]
}]


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {



App = __webpack_require__(1);

let robbie = __webpack_require__(5);
let edward = __webpack_require__(3);
let laureen = __webpack_require__(4);
let william = __webpack_require__(6);
let dylan = __webpack_require__(2);


app = new App({
    series:{
        robbie:robbie,
        laureen:laureen,
        william:william,
        edward:edward,
        dylan:dylan
    },
    sequence:[
        'robbie','laureen','william','dylan', 'edward'
    ]

});

app.begin();


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


const View = __webpack_require__(0);


class HealthBar extends View.ViewElement {

    constructor(label, maxHealth){
        super("status-bar", true);
        this.setHP(maxHealth)
    }

    setHP (hp) {
        this.level = hp
        let htmlTxt = "HP:  ";
        for(let i = 0; i < hp; i++) {
            htmlTxt += "|";
        }
        this.divElem.innerHTML = htmlTxt;
    }
}


class HUD extends View.ViewElement {

    constructor(player){
        super("hud", true)
        this.player = player
        this.healthbar = new HealthBar("HP: ", 10)
    }

    update(){
        this.healthbar.setHP(this.player.hp)
    }
}

module.exports = HUD


/***/ }),
/* 9 */
/***/ (function(module, exports) {



class Player {
    constructor(){
        this.hp = 100
    }

    die() {
        this.hp = 0;
    }

    reset(){
        this.hp = 100;
    }

}


module.exports = Player


/***/ })
/******/ ]);