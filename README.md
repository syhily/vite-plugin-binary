# vite-plugin-binary

A Vite plugin for importing the file as binary with compress support.

## Install

```bash
npm i -D vite-plugin-binary
npm i fflate
```

## Usage

vite.config.ts

```ts
import { defineConfig } from 'vite'
import Binary from 'vite-plugin-binary'

export default defineConfig({
  plugins: [Binary()],
})
```

```main.ts
import uint8array from './opposans.ttf?binary'
```

## TypeScript support

To add the types check support for using typescript. Modify the `tsconfig.json` file as follows.

```json
{
  "compilerOptions": {
    "types": ["vite-plugin-binary/types"]
  }
}
```
