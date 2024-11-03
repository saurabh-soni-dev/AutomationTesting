module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  transform: {'\\.[jt]sx?$': 'babel-jest'},
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-swiper|react-redux|react-native-linear-gradient|@react-navigation|@react-native|@react-native/asset)/)',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  testPathIgnorePatterns: ['./node_modules/', '/android/', '/ios/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.tsx',
    'react-native-responsive-fontsize':
      '<rootDir>/__mocks__/react-native-responsive-fontsize.tsx',
    'react-native-size-matters':
      '<rootDir>/__mocks__/react-native-size-matters.tsx',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!src/**/*.d.ts',
    '!src/navigation/*.{js,jsx,ts,tsx}',
  ],
  coverageReporters: ['clover', 'json', 'lcov', 'text'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
