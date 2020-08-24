import * as colors from '@material-ui/core/colors'
import { Palette } from '@material-ui/core/styles/createPalette'

const white = '#FFFFFF'
const black = '#000000'

export interface AdditionalPaletteOptions {
  icon: string
  border: {
    main: string
    secondary: string
  }
  highlight: string
}

const palette: Partial<Palette> = {
  primary: {
    contrastText: white,
    dark: '#b34e40',
    main: '#1991FF',
    light: '#d16b3b',
  },
  secondary: {
    contrastText: '#202020',
    dark: '#B519FF',
    main: '#EAF4FE',
    light: '#d8d8d8',
  },
  success: {
    contrastText: white,
    dark: '#4caf50',
    main: '#16D864',
    light: '#4caf50',
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: '#FD1C1C',
    light: colors.red[400],
  },
  text: {
    primary: black,
    secondary: '#626262',
    tertiary: '#A5A5A5',
    disabled: '#939393',
    contrast: '#fbf6eb',
    light: '#4b5157',
    lighter: '#E8E8E8',
    hint: '#939699',
    description: '#999291',
  },
  icon: colors.grey[400],
  background: {
    default: white,
    primary: white,
    secondary: '#FAFAFA',
    tertiary: '#E8E8E8',
    paper: white,
    dark: '#E5E5E5',
  },
  border: {
    main: '#d9dadb',
    secondary: '#f0f0f0',
  },
  divider: '#f4f3f3',
  highlight: '#fbeeb3',
}

export default palette
