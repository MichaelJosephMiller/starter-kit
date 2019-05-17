module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        'targets': {
          'node': 'current',
          'browsers': [ 'last 2 versions' ]
        }
      }
    ]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import'
  ]
}
