import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist"],
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    globals: globals.browser,
    parser: tsEslintParser,
  },
  plugins: {
    "@typescript-eslint": tsEslintPlugin,
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "@typescript-eslint/no-empty-object-type": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
});
