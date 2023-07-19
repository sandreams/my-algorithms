const config = {
  clearMocks: false,
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/file-mock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/object-mock.js',
  },
  testMatch: ['<rootDir>/**/__test__/**/*unit.(js|jsx|ts|tsx)'],
  verbose: true,
};

module.exports = config;
