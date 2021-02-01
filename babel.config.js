module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "ezwn-ux-native": "./lib/ezwn-ux-native",
            "ezwn-storage-native": "./lib/ezwn-storage-native",
            "ezwn-react-app": "./lib/ezwn-react-app",
            "ezwn-react-app-ux-native": "./lib/ezwn-react-app-ux-native",
            "ezwn-react-native-session": "./lib/ezwn-react-native-session",
            "ezwn-react-native-data-mng-lang": "./lib/ezwn-react-native-data-mng-lang",
            "ezwn-react-native-generic-crud-feature": "./lib/ezwn-react-native-generic-crud-feature",
            features: "./features",
            shared: "./shared"
          }
        }
      ]
    ]
  };
};
