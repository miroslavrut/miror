const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        darkin: '#050710',
        darkpurple: '#180A29',
        rlydarkfam: '#94CECF',
        bitlessdarkinnit: '#F6F6F7',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
