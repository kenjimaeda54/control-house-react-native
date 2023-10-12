import '@emotion/react'
import theme from "@/themes/theme"

declare module '@emotion/react' { 
   type ThemeTypes = typeof theme
   export interface Theme  extends ThemeTypes { }
}