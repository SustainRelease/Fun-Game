

class ViewElement {
    constructor(divID){
        this.divElem = document.getElementById(divID);
    }

    addDiv (htmlAdd) {
      this.divElem.innerHTML += htmlAdd;
    }

    clearDiv () {
        this.divElemDiv.innerHTML = "";
     }

}

class StatusBar extends ViewElement{
    constructor(){
        super("status-bar")
    }
}


class TextPane {
    constructor(){


    }

}
