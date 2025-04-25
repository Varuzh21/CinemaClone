module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    '@babel/preset-flow',
  ],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin',
    'babel-plugin-syntax-hermes-parser'
  ]
};
