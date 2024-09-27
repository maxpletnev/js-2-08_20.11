const path = require ('path');
const ext = require ('webpack-node-externals');
const cop = require ('copy-webpack-plugin');

module.exports = {
    entry: { // всё о входном файле
        main: path.resolve (__dirname, 'src', 'server', 'server.js')
    },
    output: { // всё о собранном
        path: path.join (__dirname, 'dist', 'server'),
        publicPath: "",
        filename: 'js/[name].js'
    },
    target: 'node', // web - front, node - back/desctop
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [ext ()],
    module: { // солянка
        rules: [
            { // es6 => es5
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ],
    },
    plugins: [
        new cop ([{
            from: 'src/server/db',
            to: 'db/[name].[ext]',
            toType: 'template'
        }])        
    ],
}