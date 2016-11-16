function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
    }

    return sources;
}
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: getEntrySources([
            './entry.js'
        ])
    },
	output: {
        publicPath: 'http://localhost:8080/', // <-- New line!
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
			{
                test: /\.js$/,
                loaders: ['jsx', 'babel'], // <-- changed line
                exclude: /node_modules/
            },
			
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./public/style.css', {
            allChunks: true
        })
    ]
}
