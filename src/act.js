
var Act = {

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
