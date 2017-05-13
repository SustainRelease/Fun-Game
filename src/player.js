var Act = require('./act.js')

function Player(){
    this.hp = 10
}


Player.prototype = {
     die() {
        this.hp = 0;
        Act.clearPage();
        Act.addDiv("<h2>You're dead!</h2>");
    },

    win()
        Act.clearPage();
        Act.addDiv("<h2>You win!</h2>");
    }
}


module.exports = Player
