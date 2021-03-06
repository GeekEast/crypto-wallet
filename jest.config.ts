module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|js)"],
  transform: {
    "^.+\\.(ts)$": "ts-jest"
  },
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  moduleDirectories: ["node_modules"],
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/modules/**/*.ts",
    "!src/**/*.{entity,dto,provider,schema,error,d}.ts",
    "!src/**/{index,constants}.ts"
  ],
  coverageReporters: ["json-summary"]
  // coverageThreshold: {
  //   global: {
  //     branches: 95,
  //     functions: 95,
  //     lines: 95,
  //     statements: 95
  //   }
  // }
}
