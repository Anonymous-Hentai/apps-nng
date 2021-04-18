const path = require('path');
const config = require('../commonWebpackConfig');

module.exports = {
    ...config,
    output: {
        filename: 'p-wallet.js',
        libraryTarget: "commonjs",
        path: path.resolve(__dirname, '../../public/apps/p-wallet.js'),
    },
}