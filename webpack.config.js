const webpack = require('webpack');
const path = require('path');
const plg = {
    CommonsChunk: webpack.optimize.CommonsChunkPlugin,
    Define: webpack.DefinePlugin,
    CleanWebpack: require('clean-webpack-plugin'),
    ExtractTextWebpack: require('extract-text-webpack-plugin'),
    HtmlWebpack: require('html-webpack-plugin')
}

module.exports = env => {
    let BUILD_ENV = env ? env.NODE_ENV : 'development';

    return {
        entry: {
            common: ['react','react-dom'],
            app: './src/app.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx$)/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.s?[ca]ss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'] //plg.ExtractTextWebpack.extract('css-loader')
                }
            ]
        },
        plugins: [
            new plg.CleanWebpack(['dist']),
            new plg.CommonsChunk({
                minChunks: 3,
                name: "common"
            }),
            new plg.Define({
                'process.env.NODE_ENV': JSON.stringify(BUILD_ENV)
            }),
            //new plg.ExtractTextWebpack('styles.css'), // only for production, no HMR
            new plg.HtmlWebpack({
                template: 'src/index.html'
            })
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js'
        },
        devServer: {
            historyApiFallback: true
        }
    }
}