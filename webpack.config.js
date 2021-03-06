var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        publicPath: "/dist/",
        contentBase: [path.join(__dirname, 'static')],
        compress: true,
        port: 9000
    }
};