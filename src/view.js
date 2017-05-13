

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
            this.add(`<h2> ${section.title} </h2>`);
            this.add(`<h2> ${section.text} </h2>`);
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
