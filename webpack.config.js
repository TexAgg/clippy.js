var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname + "/scripts",
	entry: "./main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	],
	target: 'web',
	module: {
		loaders: [
			{ 
				test: /\.css$/,				 
				//include: [path.resolve(__dirname, "not_exist_path")],
				loader: "style-loader!css-loader" 
			}
		]
	}
};