Package.describe({
  name: 'orionsoft:graphql-compiler',
  summary: 'Write graphql in .graphql files',
  version: '0.0.4',
  git: 'https://github.com/orionsoft/graphql-compiler'
})

Package.registerBuildPlugin({
  name: 'compileGraphQL',
  use: ['caching-compiler@1.1.7', 'ecmascript@0.5.8'],
  sources: ['plugin/compile-graphql.js'],
  npmDependencies: {
    'source-map': '0.5.6'
  }
})

Package.onUse(function(api) {
  api.use('isobuild:compiler-plugin@1.0.0')
})

Package.onTest(function(api) {
  api.use('orionsoft:graphql-compiler')
})
