
const View = require('./view.js');


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
