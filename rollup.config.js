import resolve from 'rollup-plugin-node-resolve'
import minify from 'rollup-plugin-minify-es'

const banner = '/**\n * Effect\n *\n * Copyright 2018 Dmitry Dudin <dima@nuware.ru>\n */'

export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/effect.esm.js',
    format: 'esm',
    banner
  },
  external: ['@nuware/functions']
}, {
  input: 'src/index.js',
  output: {
    file: 'dist/effect.umd.js',
    format: 'umd',
    name: 'nuware.Effect',
    banner
  },
  plugins: [
    resolve()
  ]
}, {
  input: 'src/index.js',
  output: {
    file: 'dist/effect.min.js',
    format: 'umd',
    name: 'nuware.Effect'
  },
  plugins: [
    resolve(),
    minify()
  ]
}]
