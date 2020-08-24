import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import palette from './palette'

const typography: TypographyOptions = {
  fontFamily: 'Roboto',
  h1: {
    fontSize: 32,
    color: palette.text.primary,
    fontWeight: 500,
  },
  h2: {
    fontSize: 20,
    color: palette.text.secondary,
    fontWeight: 400,
  },
  h3: {
    fontSize: 16,
    color: palette.text.primary,
    fontWeight: 500,
  },
  h4: {
    fontSize: 20,
    color: palette.text.primary,
    fontWeight: 500,
  },
  h5: {
    fontSize: 25,
    color: palette.text.primary,
    fontWeight: 700,
  },
  h6: {
    fontSize: 22,
    color: palette.text.tertiary,
    fontWeight: 700,
  },
  body1: {
    fontSize: 16,
    color: palette.text.primary,
    fontWeight: 400,
  },
  body2: {
    fontSize: 14,
    color: palette.text.secondary,
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: 16,
    color: palette.text.hint,
    fontWeight: 400,
  },
  button: {
    fontSize: 16,
    fontWeight: 500,
    textTransform: 'none',
  },
  overline: {
    fontSize: 14,
    fontWeight: 400,
    color: palette.primary.main,
    textTransform: 'none',
    textDecoration: 'none',
  },
  caption: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: 'uppercase',
    color: palette.text.secondary,
  },
}

export default typography
