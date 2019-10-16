const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css')

    return {
        entry: './src/app.js', // './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules:[{
                // how to told webpack to run babel
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                // biar bisa support scss dan css
                test: /\.s?css$/,
                // use sama dgn loader, tp dia bisa make banyak loader
                use : CSSExtract.extract({
                    use: [ 
                        {
                            loader : 'css-loader',
                            options : {
                                // fungsinya buat nyari source dari file cssnya
                                sourceMap : true
                            }
                        },
                        {
                            loader : 'sass-loader',
                            options : {
                                // fungsinya buat nyari source dari file sassnya
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            // to tell browser that we use client side routes
            historyApiFallback: true, 
            // folder dist cuma ada di server, ga ada di lokal, makanya folder dist ga ada di dalam folder public
            publicPath: '/dist/' // muncul kalo buat di localhost
        }
    }
}
