import { ThemeProvider } from '@ui5/webcomponents-react'
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme'
import '@ui5/webcomponents-theming/dist/generated/json-imports/Themes'
import '@ui5/webcomponents/dist/generated/json-imports/Themes'
import '@ui5/webcomponents-fiori/dist/generated/json-imports/Themes'

export default function FioriProvider({ children }) {
  setTheme('sap_horizon')
  return <ThemeProvider>{children}</ThemeProvider>
}
