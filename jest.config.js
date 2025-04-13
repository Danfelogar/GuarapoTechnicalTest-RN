module.exports = {
  preset: 'react-native',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './setupTests.js',
  ],
  moduleNameMapper: {
    '^console$': require.resolve('console-browserify'),
    '^react-native$': 'react-native-web',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@testing-library)',
  ],
};
