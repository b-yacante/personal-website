// Vuetify
import { createVuetify, type ThemeDefinition } from 'vuetify'

// Styles
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

// Icons
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const MainTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#181818',
    surface: '#FFFFFF',
    primary: '#FFEB3B',
    secondary: '#FFC107',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'MainTheme',
    themes: {
      MainTheme
    }
  }
})
