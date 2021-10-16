module.exports = {
  rootDir: "./",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx","tsx"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["./setup-enzyme.js"],

  coverageReporters: ["lcov", "json", "text", "json-summary", "html"],
};
