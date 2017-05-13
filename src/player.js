
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
