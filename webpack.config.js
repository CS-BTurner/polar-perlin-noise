const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, './src/index.tsx'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader',
          options: { useCache: true },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'chunk-[name].js',
    filename: 'bundle.js',
  },

  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template: path.join(__dirname, 'build-helpers', 'template.html'),
      filename: 'index.html',
    }),
  ],

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    publicPath: '/',
    compress: true,
    port: 3000,
    hot: true,
    open: true,
  },
};
