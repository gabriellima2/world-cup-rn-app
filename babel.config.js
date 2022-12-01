module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
			["module:react-native-dotenv", {
        moduleName: "@env",
        path: ".env",
				safe: false,
        allowUndefined: true,
			}],
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
					"@services": "./src/services",
					"@models": "./src/models",
					"@theme": "./src/theme.ts",
					"@mocks": "./src/mocks",
					"@utils": "./src/utils"
        }
      }]
    ]
  };
};
