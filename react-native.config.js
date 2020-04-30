module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ['./src/assets/fonts/'], // stays the same
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
