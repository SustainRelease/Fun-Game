

class Player {
    constructor(){
        this.hp = 100;
        this.capabilities = {};
    }

    die() {
        this.hp = 0;
    }

    reset(){
        this.hp = 100;
    }
    
    

}


module.exports = Player
