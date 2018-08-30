const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'index.main.js'
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			include: [resolve(__dirname, 'src')],
			exclude: [resolve(__dirname, 'node_modules')],
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: [
						['@babel/plugin-proposal-decorators', { legacy: true }],
						'@babel/plugin-proposal-class-properties',
						["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
					]
				}
			}
		}, {
			test: /\.less$/,
			use: ['style-loader', 'css-loader', {
				loader: 'less-loader',
				options: {
					modifyVars: {
						'primary-color': 'orange'
					},
					javascriptEnabled: true
				}
			}]
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['./dist']),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	],
	devServer: {
		contentBase: './dist',
		port: 8383
	}
};

module.exports = config;