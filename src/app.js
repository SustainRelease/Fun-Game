var Pages = require('./pages.js');
function App(){

    console.log("Hello from App");

    let page = new Pages.Page();
    page.hello();
}

module.exports = App;
