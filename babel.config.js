module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [require.resolve("babel-plugin-module-resolver"), {
        root: ["."],
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ],
        alias: {
          "@components": "./src/components",
          "@layouts": "./src/layouts",
          "@routes": "./src/routes",
          "@screens": "./src/screens",
          "@interfaces": "./src/interfaces",
          "@globalTypes": "./src/types",
					"@services": "./src/services",
					"@theme": "./src/theme.ts"
        }
      }]
    ]
  };
};
