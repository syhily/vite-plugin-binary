# vite-plugin-binary

A Vite plugin for importing the file as binary with compress support.

## Install

```bash
npm i -D vite-plugin-binary
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

```ts
// main.ts
import compressed from './opposans.ttf?binary'
```

### Reduce Binary Size

This plugin will compress the imported file in gzip format by default. This will slightly reduce the final js file size.
If you don't want this feature. You can disable it by setting in `vite.config.ts`.

```ts
import { defineConfig } from 'vite'
import Binary from 'vite-plugin-binary'

export default defineConfig({
  plugins: [Binary({ gzip: false })],
})
```

### Decompress Buffer in Node.js environment

Given the imports is compressed in gzip format. You can decompress by using the zlib no Node.js environment.

```ts
import { gunzipSync } from 'node:zlib'
import compressed from './opposans.ttf?binary'

const uint8Array = gzipSync(compressed)
```

### Decompress Buffer in Browser environment

Given the imports is compressed in gzip format. You can install `fflate` and other tools.

```sh
npm i fflate
```

```ts
import { gunzipSync } from 'fflate'
import compressed from './opposans.ttf?binary'

const uint8Array = gzipSync(compressed)
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
