var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
// var combineLoaders = require('webpack-combine-loaders');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public',
		libraryTarget: "umd"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, "node_modules"),
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015', 'react'],
							plugins: [
								["transform-class-properties"],
								["transform-object-rest-spread"]
							],
						},
					}
				],
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
					}
				],
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						query: {
							modules: true,
							localIdentName: '[name]__[local]__[hash:base64:5]'
						}
					},
					{
						loader: "sass-loader",
						query: {
							modules: true
						}
					}
				],
			},
			// {
			// 	test: /\.(gif|png|jpe?g|svg)$/i,
			// 	// exclude: path.resolve(__dirname, "node_modules"),
			// 	use: [
			// 		'file-loader',
			// 		{
			// 			loader: 'image-webpack-loader',
			// 			options: {
			// 				bypassOnDebug: true, // webpack@1.x
			// 				disable: true, // webpack@2.x and newer
			// 			},
			// 		},
			// 	],
			// },
			{
				test: /\.(png|jpe?g)$/,
				loader: 'url-loader'
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.css'
		})
	]
};
