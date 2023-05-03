/* eslint-disable */

/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  reporters: ["default", ["jest-junit", { outputDirectory: "coverage", outputName: "junit.xml" }]],
  collectCoverage: true,
  collectCoverageFrom: ["dist/utilx.min.cjs.js"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "clover"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  coverageProvider: "v8",
  testEnvironment: "jsdom",
};
