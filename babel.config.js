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
					"@services": "./src/services",
					"@models": "./src/models",
					"@mocks": "./src/mocks",
					"@utils": "./src/utils",
					"@hooks": "./src/hooks",
					"@globalTypes": "./src/@types",
					"@styles": "./src/styles",
					"@contexts": "./src/contexts",
					"@schemas": "./src/schemas"
        }
      }]
    ]
  };
};
