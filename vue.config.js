const path = require('path')

module.exports = {
	outputDir: process.env.outputDir, //build输出目录
	lintOnSave: false, //是否开启eslint
	indexPath: './html/index.html',
	productionSourceMap: false,
	publicPath: process.env.NODE_ENV === 'production' ? '../' : '/',
	configureWebpack: {
		resolve: {
			modules: [path.resolve('node_modules'), 'node_modules'],
		}
	},
	devServer: {
		open: true, //设置自动打开
	},
}
