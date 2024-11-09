module.exports = {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  singleQuote: true,
  importOrder: [
    '^react',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/components(/?.*)$',
    '^@/hooks(/?.*)$',
    '^@/utils(/?.*)$',
    '^@/(.*)$',
    '',
    '^./',
    '',
    '^../',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  tailwindConfig: './tailwind.config.js',
  trailingComma: 'es5',
};
