import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}","**/*.test.jsx"],
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
        jest: true,
        node: true,
        onChange: "readonly",
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
      jest: pluginJest,
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "prettier/prettier": "off",
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "off",
    },
  },
  {
    files: ["**/*.test.{js,jsx}"],
    languageOptions: {
      globals: {
        // Define Jest globals manually
        describe: "readonly",
        test: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        jest: "readonly",
        getComputedStyle: "readonly",
        // Add more Jest globals if needed
      },
    },
    plugins: {
      jest: pluginJest,
    },
    rules:{
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

];