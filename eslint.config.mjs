// eslint.config.mjs
import pluginVue from "eslint-plugin-vue";
import vueTsEslintConfig from "@vue/eslint-config-typescript";

export default [
  ...pluginVue.configs["flat/essential"],
  ...vueTsEslintConfig(),
  {
    rules: {
      'vue/v-on-handler-style': [ 'error',
        [ 'method', 'inline-function' ], // ["method", "inline-function"] | ["method", "inline"] | "inline-function" | "inline"
        {
          ignoreIncludesComment: false
        }
      ]
    }
  }
]
