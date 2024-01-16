import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": require.resolve("crypto-browserify"),
      "crypto-browserify": false, //if you want to use this module also don't forget npm i crypto-browserify 
      "os": require.resolve("os-browserify/browser"),
      "timers": require.resolve("timers-browserify"),
      "util":require.resolve("util/"),
      "url":require.resolve("url/"),
      "process": require.resolve("process/browser"),
      //"child_process": false,
      "dns":require.resolve("dns"),
    },         
  },
};
