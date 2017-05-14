//opportunity Control

{
    type:'button',
    text:'cut path'
    enabler:'cut',
    action:''
}

//capability Player

{
    capabilities:{
        cut:'ting'=='fun',
        woodxp:30
    }

    challenge(capability, minimum){
        if(minimum == undefined){
            return capability in this.capabilities;
        }else{
            return this.capabilities[capability] >= minimum;
        }

    }
}
