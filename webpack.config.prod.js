var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;

var config = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		// filename: 'bundle.[hash:6].js'
		filename: 'bundle.js?[hash:6]'
	},
	devServer: {
		contentBase: 'dist',
		inline: true,
		port: 8083,
		stats: {
			colors: true
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style!css',
				include: path.resolve(__dirname, 'src')
			},
			{
				test: /\.less$/,
				loader: 'style!css!less',
				include: path.resolve(__dirname, 'src')
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'webpacktest',
			template: './src/index.html'
		}),
		new uglifyPlugin({
			compress: false
		})
	]
};

module.exports = config;
