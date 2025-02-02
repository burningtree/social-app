/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: [
    'en',
    'ca',
    'cs',
    'de',
    'es',
    'fi',
    'fr',
    'ga',
    'hi',
    'id',
    'it',
    'ja',
    'ko',
    'pt-BR',
    'tr',
    'uk',
    'zh-CN',
    'zh-TW',
  ],
  catalogs: [
    {
      path: '<rootDir>/src/locale/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: 'po',
}
