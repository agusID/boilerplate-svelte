const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

const { scss } = require('svelte-preprocess')

const alias = {
	svelte: path.resolve('node_modules', 'svelte'),
	components: path.resolve(__dirname, './src/components/index.js'),
	'@assets': path.resolve(__dirname, './src/assets'),
	'@config': path.resolve(__dirname, './src/config'),
	'@views': path.resolve(__dirname, './src/views'),
}
const extensions = ['.mjs', '.js', '.svelte']
const mainFields = ['svelte', 'browser', 'module', 'main']

const isInline = process.env.INLINE_SOURCE

const webpackConfig = {
	entry: {
		bundle: ['./src/main.js']
	},
	resolve: { alias, extensions, mainFields},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true,
						preprocess: require('svelte-preprocess')([
							scss()
						])
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new HtmlWebpackPlugin({
			inlineSource: isInline ? '.(js|css)$' : '',
			hash: isInline ? false : true,
			title: 'svelte-boilerplate'
		})
	],
	devtool: prod ? false: 'source-map',
	devServer: {
		port: 3000
	}
};

module.exports = webpackConfig
