import { defineConfig } from 'tsdown'

export default defineConfig({
    entry: ['./src/main.ts'],
    skipNodeModulesBundle: true,
    format: ['cjs', 'esm']
})
