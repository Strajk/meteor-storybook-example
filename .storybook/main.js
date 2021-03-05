const path = require("path");

const webpack = require("webpack");

module.exports = {
  stories: [
    // Import all stories coupled with components (or really anything else)
    "../imports/ui/**/*.stories.@(jsx|tsx)",
  ],
  addons: ["@storybook/addon-essentials"],
  webpackFinal: (config) => {
    hackGlobals(config);
    return config;
  },
};

function hackGlobals(config) {
  // Replace meteor with fake one
  config.plugins.push(
    new webpack.NormalModuleReplacementPlugin(/^meteor/, (resource) => {
      // Gets absolute path to mock `meteor` packages
      const absRootMockPath = path.resolve(__dirname, "../.jest_mocks/meteor");
      // Gets relative path from requesting module to our mocked module
      const relativePath = path.relative(resource.context, absRootMockPath);
      console.log({ absRootMockPath, relativePath });
      // Updates the `resource.request` to reference our mocked module instead of the real one
      resource.request = resource.request
        .replace(/meteor/, relativePath)
        // Only in Meteor-land packages contain ":" in the name, such as meteor/iron:router
        // And only in Windows-land ":" cannot be in a filename
        // So "iron:router" is stored in "iron-router.js"
        .replace(":", "/");
    })
  );

  config.plugins.push(
    new webpack.ProvidePlugin({
      jest: "jest-mock",
    })
  );
}
