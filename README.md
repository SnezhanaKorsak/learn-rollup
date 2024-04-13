# Rollup

## Модуль компоновки JavaScript
Скомпилируйте небольшие фрагменты кода во что-то большее и более сложное

В качестве материала для изучения Rollup создан проект, представляющий собой пакет компонентов в React. В качестве сборщика модулей используется Rollup.

## Features

- React
- TypeScript
- Styled-components
- Eslint
- Prettier
- Storybook

## Plugins
- [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external) - используется для того, чтобы исключать из сборки зависимости, которые указаны в peerDependencies. Это поможет уменьшить объем пакета
- [@rollup/plugin-commonjs](https://www.npmjs.com/package/@rollup/plugin-commonjs) - используется для поддержки формата CommonJS
- [@rollup/plugin-node-resolve](https://www.npmjs.com/package/%40rollup/plugin-node-resolve) - помогает Rollup работать с внешними модулями (node_modules)
- [@rollup/plugin-typescript](https://www.npmjs.com/package/%40rollup/plugin-typescript) - поддерживает работу Rollup с Typescript
- [@rollup/plugin-terser ](https://www.npmjs.com/package/@rollup/plugin-terser) - минифицирует код сборки
- [rollup-plugin-dts](https://www.npmjs.com/package/rollup-plugin-dts) - собирает все типы в единый файл
- [@rollup/plugin-json](https://github.com/rollup/plugins/tree/master/packages/json) - позволяет Rollup импортировать данные из файла JSON