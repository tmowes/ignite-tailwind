import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        julius: '#ff6900',
      },
    },
  },
  plugins: [],
}

export default config
