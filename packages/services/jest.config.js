/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    "src/**/*.ts",
    // export のみのファイルはカバレッジ対象外とする
    "!src/index.ts",
    "!src/shared/index.ts",
    // 型定義のみのファイルはカバレッジ対象外とする
    "!src/core/**.ts",
    '!**/*.d.ts',
    // 実装のないファイルはカバレッジ対象外とする
    '!**/node_modules/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
  },
  verbose: true,
};
