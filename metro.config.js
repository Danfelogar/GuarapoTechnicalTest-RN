// metro.config.js
const {getDefaultConfig} = require('@react-native/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  ...require('node-libs-react-native'),
  console: require.resolve('console-browserify'),
};

config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs'];

module.exports = config;
