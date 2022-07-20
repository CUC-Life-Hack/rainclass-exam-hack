import path from 'path';
import url from 'url';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import WebpackUserscript from 'webpack-userscript';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const production = !!process.env['npm_config_production'];

export default {
	mode: production ? 'production' : 'development',
	entry: path.resolve(__dirname, 'main.js'),
	output: {
		path: path.resolve(__dirname, production ? 'dist' : 'dev'),
		filename: 'main.js'
	},
	module: {
		rules: [{
			test: /\.css/,
			use: ['style-loader', 'css-loader']
		}]
	},
	plugins: [
		new WebpackUserscript({
			headers: {
				name: 'rainclass-exam-hack',
				version: '1.0.2',
				grant: [],
				include: /https:\/\/examination\.xuetangx\.com/.toString(),
				'run-at': 'document-start'
			},
			downloadBaseUrl: 'https://github.com/CUC-Life-Hack/rainclass-exam-hack/raw/master/dist/main.user.js',
			metajs: false,
			renameExt: true,
			pretty: true,
		}),
		new CleanWebpackPlugin()
	]
};
