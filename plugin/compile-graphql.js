class GraphQLCompiler extends CachingCompiler {
  constructor() {
    super({
      compilerName: 'graphqlcompiler',
      defaultCacheSize: 1024 * 1024 * 10
    })
  }

  getCompileOptions(file) {
    return {
      filename: file.getPathInPackage(),
      generatedFile: '/' + this.outputFilePath(file),
      sourceFiles: [file.getDisplayPath()]
    }
  }

  outputFilePath(file) {
    return file.getPathInPackage()
  }

  getCacheKey(file) {
    return [file.getSourceHash(), file.getDeclaredExports(), this.getCompileOptions(file)]
  }

  getFileOutput(content) {
    const compiled = content.replace(/\n/g, '\\n').replace(/"/g, '\\"')
    const output = `module.export("default",exports.default=("${compiled}"));`
    return output
  }

  compileOneFile(inputFile) {
    const output = this.getFileOutput(inputFile.getContentsAsString())
    return {
      sourcePath: inputFile.getPathInPackage(),
      path: this.outputFilePath(inputFile),
      data: output,
      hash: inputFile.getSourceHash()
    }
  }

  addCompileResult(inputFile, sourceWithMap) {
    inputFile.addJavaScript({
      path: this.outputFilePath(inputFile),
      sourcePath: inputFile.getPathInPackage(),
      data: sourceWithMap.data
    })
  }

  compileResultSize(compileResult) {
    return compileResult.data.length
  }
}

Plugin.registerCompiler(
  {
    extensions: ['graphql', 'graphqls']
  },
  () => new GraphQLCompiler()
)
