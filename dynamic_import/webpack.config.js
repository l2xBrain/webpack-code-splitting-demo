const path = require('path');

module.exports = {
    entry: {
        index: './dynamic_import/index.js',
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'async'
        }
    }
}