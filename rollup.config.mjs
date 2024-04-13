import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import { main, module, types } from './package.json';

const isDev = process.env.NODE_ENV === 'development';

export default [
  {
    /** Входная точка для сборки */
    input: 'src/index.ts',
    /** Указывает, куда будет помещен обработанный код */
    output: [
      /** билд для CommonJS */
      {
        file: main,
        format: 'cjs',
        sourcemap: isDev,
      },
      /** билд для ES Modules */
      {
        file: module,
        format: 'esm',
        sourcemap: isDev,
      },
    ],
    /** Подключаемые плагины */
    plugins: [
      /** Позволяет Rollup импортировать данные из файла JSON */
      json(),
      /** Исключать из сборки зависимости, которые указаны в peerDependencies */
      peerDepsExternal(),
      /** Помогает Rollup работать с внешними модулями (node_modules) */
      resolve(),
      /** Используется для поддержки формата CommonJS */
      commonjs(),
      /** Поддерживает работу Rollup с Typescript */
      typescript({ tsconfig: './tsconfig.json' }),
      /** Минифицирует код сборки */
      terser(),
    ],
    /** Указываются пакеты, которые не должны быть включены  в сборку */
    external: ['react', 'react-dom', 'styled-components'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: types, format: 'es' }],
    plugins: [
      /** Собирает все типы в единый файл */
      dts.default(),
    ],
  },
];
