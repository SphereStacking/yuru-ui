import { defineConfig, getDefaultConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [
    HstVue(),
  ],
  setupFile: '/src/histoire-setup.ts',
  theme: {
    title: 'yuru-ui',
    favicon: '',
    darkClass: 'yr-dark',
    colors: {
      primary: {
        50: '#edfff2',
        100: '#ddffe7',
        200: '#b0ffc4',
        300: '#80efa2',
        400: '#55d47a',
        500: '#38b45c',
        600: '#2a9048',
        700: '#4a9960',
        800: '#1a6530',
        900: '#0e3a1c',
      },
      gray: {
        50: '#f6fef8',
        100: '#eef7f0',
        200: '#d2f0da',
        300: '#afd9b8',
        400: '#8baa94',
        500: '#6a8873',
        600: '#4d6855',
        700: '#3d5a44',
        800: '#2a3d30',
        900: '#0e1810',
      },
    },
  },
  defaultStoryProps: {
    layout: {
      type: 'grid',
      width: '100%',
    },
  },
  backgroundPresets: [
    ...(getDefaultConfig().backgroundPresets || []),
  ],
  responsivePresets: [
    { label: 'Mobile', width: 375, height: 667 },
    { label: 'Tablet', width: 768, height: 1024 },
    { label: 'Desktop', width: 1280, height: 800 },
  ],
  tree: {
    groups: [
      { id: 'top', title: '' },
    ],
  },
  vite: {
    base: '/',
  },
})
