module.exports = {
  preset: "@vue/cli-plugin-unit-jest",

  collectCoverage: true,

  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/main.js",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],

  coverageDirectory: "./tests/unit/reports/coverage",
};
