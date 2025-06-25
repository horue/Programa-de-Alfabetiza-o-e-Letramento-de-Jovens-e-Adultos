const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver = {
  ...config.resolver,
  blockList: [/\/__tests__\/.*/],
  unstable_enablePackageExports: false,
};
config.watchFolders = [__dirname];

module.exports = config;