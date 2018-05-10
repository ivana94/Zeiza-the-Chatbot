const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
   })
];

if (require.main == module) {
    plugins.push(new UglifyJSPlugin({
       uglifyOptions:{
           compress: {
               warnings: false,
               booleans: true,
           }
   }
    }));
}

const conf = {
    entry: ['babel-polyfill', __dirname + '/src/start.js'],
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: plugins,
    module: {
        rules: [{
            test:  /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: [['es2015'], ['react']],
                plugins: ['transform-async-to-generator']
            }
        }]
    }
};

if (require.main == module) {
    webpack(conf, function(err, info) {
        if (err) {
            console.log(err);
        }
        if (info && info.compilation.errors.length) {
            console.log(info.compilation.errors);
        }
    });
} else {
    module.exports = require('webpack-dev-middleware')(webpack(conf), {
        watchOptions: {
            aggregateTimeout: 300
        },
        publicPath: '/'
    });
}
