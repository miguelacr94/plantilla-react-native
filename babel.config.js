module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel'
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.ts',
            '.tsx',
            '.json'
          ],
          alias: {
            '@': './src',
            '@core': './src/core',
            '@features': './src/features',
            '@app': './src/app',
            '@navigation': './src/navigation',
            '@services': './src/services',
            '@state': './src/state'
          },
        },
      ],
      // 👇 Este plugin debe ir al final y fuera del array anterior
      'react-native-reanimated/plugin',
    ],
  };
};
