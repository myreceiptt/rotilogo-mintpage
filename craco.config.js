const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (config) => {
      config.resolve = config.resolve || {};
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        stream: require.resolve("stream-browserify"),
        crypto: require.resolve("crypto-browserify"),
        buffer: require.resolve("buffer"),
        process: require.resolve("process/browser"),
        url: require.resolve("url/"),
        zlib: require.resolve("browserify-zlib"),
        assert: require.resolve("assert/"),
      };

      config.plugins = [
        ...(config.plugins || []),
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: ["process"],
        }),
      ];

      // Silence noisy sourcemap warnings from web3 minified bundle
      config.ignoreWarnings = [
        ...(config.ignoreWarnings || []),
        (warning) =>
          warning?.message?.includes("Failed to parse source map") &&
          warning?.module?.resource?.includes("node_modules/web3"),
      ];

      return config;
    },
  },
};
