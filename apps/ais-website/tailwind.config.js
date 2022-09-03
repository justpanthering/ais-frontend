const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const baseConfig = require('../../tailwind.base');

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  ...baseConfig,
  content: [
    ...baseConfig.content,
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
