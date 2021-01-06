module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      development: {
        plugins: ["@babel/transform-react-jsx-source"],
      },
    },
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@app": ".", // if app files is inside "app/" folder, replace with "./app"
          },
        },
      ],
    ],
  };
};
