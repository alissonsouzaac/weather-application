module.exports = {
    testEnvironment: 'node',
    preset: 'ts-jest',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    automock: true,
    clearMocks: true,
    globals: {
      "ts-jest": {
        isolatedModules: false,
      },
    },
  };
  