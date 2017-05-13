module.exports = {

    entry:'./src/MainScript.js',
    output:{
        path:__dirname,
        filename:"main.js",
    },

    module: {
        loaders :[
            {test:/\.css$/, loader: "style!css"}
        ]
    }

}
