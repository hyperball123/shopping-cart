module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "react-app"],
  parserOptions: {
    ecmaVersion: latest,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Define your custom rules here
    semi: ["error", "always"],
  },
};
