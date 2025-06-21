// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          dark: false,
          colors: {
            background: colors.shades.white,
            primary: colors.shades.black,
            secondary: colors.grey.darken3,
            tertiary: colors.red.lighten4,
            quaternary: colors.red.lighten4,
            quinary: colors.red.lighten4,
          }
        },
        dark: {
          dark: true,
          colors: {
            background: colors.grey.darken4,
            primary: colors.shades.white,
            secondary: colors.grey.darken3,
            tertiary: colors.red.lighten4,
            quaternary: colors.red.lighten4,
            quinary: colors.red.lighten4,
          }
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})
