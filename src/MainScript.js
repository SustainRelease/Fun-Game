

App = require("./app.js");

let robbie = require("./parts/RobbiePart.js");
let edward = require("./parts/EdwardPart.js");
let laureen = require("./parts/LaureenPart.js");
let william = require("./parts/WilliamPart.js");
let dylan = require("./parts/DylanPart.js");


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
