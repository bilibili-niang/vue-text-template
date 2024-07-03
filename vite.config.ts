import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import eslint from 'vite-plugin-eslint'
// import UnoCSS from 'unocss/vite'

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr)
}

export default defineConfig({
  plugins: [vue(), vueJsx(), eslint() /*, UnoCSS()*/],
  resolve: {
    alias: {
      '@': pathResolve('./src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${pathResolve('src/style/common.less')}";`
        },
        javascriptEnabled: true
      }
    }
  }
})