//var webpack = require('webpack');
module.exports ={
    context: __dirname+"/src",
    entry: "./entry",
    output: {
        path: __dirname + "/dist",
        filename: "h3.js",
        library:'h3',
        libraryTarget:'umd'
    },
    //plugins:[
    //// npm install webpack UglifyJsPlugin is a build-in plugin
    //    new webpack.optimize.UglifyJsPlugin()
    //],
//    module:{
//        loaders:[
//            // npm install imports-loader
//            {test:/echo/,loader:'imports?this=>window'}
//        ]
//    }
};