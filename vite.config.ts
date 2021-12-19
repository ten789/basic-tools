import { defineConfig } from 'vite'

const createDefaultConf = function () {
  return defineConfig({
    build: {
      lib: {
        entry: 'src/main.ts',
        name: 'basic-tools'
      }
    }
  })
}

export default createDefaultConf()
