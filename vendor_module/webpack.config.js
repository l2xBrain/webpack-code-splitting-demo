const path = require('path');
module.exports = {
    entry: {
        index: './mult_entry/index.js',
        another: './mult_entry/another_module.js',
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
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
            chunks: (chunk) => {
                return ['index', 'another'].includes(chunk.name);
            },
        }
    }
}