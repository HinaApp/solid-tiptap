import globals from "globals";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import solidPlugin from "eslint-plugin-solid";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ["**/node_modules/*", "**/*.config.*", "**/*.d.ts", "**/dist/*", "**/scopedPlugin.ts"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: importPlugin,
      solid: solidPlugin,
    },
    rules: {
      // eslint
      "no-unused-vars": "off", // @typescript-eslint
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../../*"],
            },
          ],
        },
      ],
      eqeqeq: ["error", "smart"],
      "prefer-const": "warn",
      "no-else-return": "warn",
      "no-useless-return": "warn",
      "no-var": "warn",
      "object-shorthand": "warn",
      "prefer-arrow-callback": "error",
      "prefer-template": "warn",
      "no-param-reassign": ["warn", { props: false }],

      // @typescript-eslint
      ...tsPlugin.configs["eslint-recommended"].rules,
      ...tsPlugin.configs["strict-type-checked"].rules,
      ...tsPlugin.configs["stylistic-type-checked"].rules,
      "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
      "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }],
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            arguments: false,
            attributes: false,
          },
        },
      ],
      "@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
      "@typescript-eslint/member-ordering": "error",

      // import
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      "import/no-unresolved": "error",
      "import/first": "error",
      "import/newline-after-import": "warn",

      // solid
      ...solidPlugin.configs.typescript.rules,
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts"],
      },
      "import/resolver": {
        typescript: {
          project: ["**/tsconfig.json"],
        },
      },
    },
  },
  prettierConfig,
];
