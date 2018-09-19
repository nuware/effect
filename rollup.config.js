import minify from 'rollup-plugin-minify-es'

const banner = '/**\n * Effect\n *\n * Copyright 2018 Dmitry Dudin <dima@nuware.ru>\n */'

export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/effect.esm.js',
    format: 'esm',
    banner
  }
}, {
  input: 'src/index.js',
  output: {
    file: 'dist/effect.umd.js',
    format: 'umd',
    name: 'nuware.Effect',
    banner
  }
}, {
  input: 'src/index.js',
  output: {
    file: 'dist/effect.min.js',
    format: 'umd',
    name: 'nuware.Effect'
  },
  plugins: [
    minify()
  ]
}]
