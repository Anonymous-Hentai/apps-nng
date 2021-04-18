const path = require('path');
const config = require('../commonWebpackConfig');

module.exports = {
    ...config,
    output: {
        filename: 'stackpad.js',
        libraryTarget: "commonjs",
        path: path.resolve(__dirname, '../../public/apps/stackpad.js'),
    },
}