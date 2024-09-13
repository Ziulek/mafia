const path = require("path");
const { getSentryExpoConfig } = require("@sentry/react-native/metro");
const { generate } = require("@storybook/react-native/scripts/generate");

// Automatically generate the storybook.requires.ts file
generate({
  configPath: path.resolve(__dirname, "./.storybook"),
});

/** @type {import('expo/metro-config').MetroConfig} */
const config = getSentryExpoConfig(__dirname);

// Enable dynamic story imports
config.transformer.unstable_allowRequireContext = true;

// Add 'mjs' to sourceExts
config.resolver.sourceExts.push("mjs");

module.exports = config;
