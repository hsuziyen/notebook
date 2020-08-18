module.exports = {
  publicPath: './',
  configureWebpack: config => ({
    entry: {
      app: "./src/main.js"
    },
    output: {
      filename: "js/[name].[contenthash:7].js",
      chunkFilename: "js/[name].[contenthash:7].js"
    },
    target: "web",
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: 'vendor'
      },
      runtimeChunk: {
        name: "manifest"
      }
    }
  })
};
