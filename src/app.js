
const View = require('./view.js');
const HUD = require('./hud.js');
const Player = require('./player.js');

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
