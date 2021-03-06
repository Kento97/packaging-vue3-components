module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        'vue/setup-compiler-macros': true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "vue/multi-word-component-names": "off",
        "semi": [2, "always"],//语句强制分号结尾
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["off"],
        "vue/no-v-model-argument": "off",
        "@typescript-eslint/no-explicit-any": "off"
    },
    "parser": "vue-eslint-parser",
};
