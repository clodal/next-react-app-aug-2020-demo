import React from 'react'
import Link from 'next/link'
import * as yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'
import { useForm, ErrorMessage, Controller } from 'react-hook-form'
import { TextField, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, Typography, Theme } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import Router from 'next/router'

interface RegisterFormProps {
  onRegisterSuccess?: () => void
}

interface RegisterFormValues {
  email: string
  password: string
  isAgree: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
  },
  icon: {
    height: 20,
    objectFit: 'contain',
  },
  formField: {
    '& > .MuiOutlinedInput-root': {
      borderRadius: theme.shape.borderRadius,
      height: 42,
    },
  },
  input: {
    '& > .MuiOutlinedInput-input': {
      padding: theme.spacing(0.25, 2),
    },
  },
  secondaryHelperText: {
    marginTop: theme.spacing(-1),
    alignSelf: 'flex-start',
  },
  errorText: {
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 400,
    color: theme.palette.error.main,
    alignSelf: 'flex-start',
    marginTop: theme.spacing(-2),
  },
  formControlLabel: {
    marginTop: theme.spacing(4),
    alignSelf: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'flex-start',
    },
  },
  checkbox: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 0, 0, 1),
      marginRight: theme.spacing(1),
    },
  },
  link: {
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}))

// Form default values and validation
const defaultValues = { email: '', password: '', isAgree: false }

const MIN_PASSWORD_LENGTH = 8

const registerFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required.'),
  password: yup
    .string()
    .min(MIN_PASSWORD_LENGTH, `Whoops, looks like your password is too short..`)
    .required('Required.'),
  isAgree: yup.boolean().oneOf([true], 'Your agreement is required to proceed'),
})

const RegisterForm: React.FC<RegisterFormProps> = (props) => {
  const { onRegisterSuccess } = props
  const classes = useStyles()

  const { control, handleSubmit, errors, reset } = useForm<RegisterFormValues>({
    defaultValues,
    validationSchema: registerFormSchema,
  })

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

  const togglePasswordVisibility = () => {
    const passwordField = document.getElementById('password') as HTMLInputElement
    if (passwordField.type === 'password') {
      passwordField.type = 'text'
      setIsPasswordVisible(true)
    } else {
      passwordField.type = 'password'
      setIsPasswordVisible(false)
    }
  }

  const onSubmit = () => {
    // TEMPORARY CLIENT DEMO FUNCTIONALITY
    reset()
    Router.push('/support')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <Button
        startIcon={<img className={classes.icon} src="/google-logo.png" alt="google-login" />}
        variant="outlined"
        color="primary"
        type="button"
        fullWidth
      >
        Sign up with Google
      </Button>
      <Typography>or</Typography>
      <Controller
        as={TextField}
        fullWidth
        className={classes.formField}
        control={control}
        name="email"
        variant="outlined"
        placeholder="Email"
        error={Boolean(errors.email)}
        InputProps={{ className: classes.input }}
      />
      <ErrorMessage errors={errors} name="email">
        {({ message }) => <Typography className={classes.errorText}>{message}</Typography>}
      </ErrorMessage>

      <Controller
        as={TextField}
        fullWidth
        className={classes.formField}
        control={control}
        id="password"
        name="password"
        type="password"
        variant="outlined"
        placeholder="Password"
        error={Boolean(errors.password)}
        InputProps={{
          className: classes.input,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility}>
                {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {!errors.password && (
        <Typography variant="body2" className={classes.secondaryHelperText}>
          Your password must be at least {MIN_PASSWORD_LENGTH} characters long
        </Typography>
      )}
      <ErrorMessage errors={errors} name="password">
        {({ message }) => <Typography className={classes.errorText}>{message}</Typography>}
      </ErrorMessage>

      <FormControlLabel
        className={classes.formControlLabel}
        control={
          <Controller
            as={<Checkbox color="primary" className={classes.checkbox} id="isAgree" />}
            control={control}
            name="isAgree"
          />
        }
        label={
          <Typography variant="body2">
            I agree to the{' '}
            <Link href="/" passHref>
              <Typography component="a" className={classes.link}>
                Terms of Service
              </Typography>
            </Link>{' '}
            and{' '}
            <Link href="/" passHref>
              <Typography component="a" className={classes.link}>
                Privacy Policy
              </Typography>
            </Link>
          </Typography>
        }
      />
      <ErrorMessage errors={errors} name="isAgree">
        {({ message }) => <Typography className={classes.errorText}>{message}</Typography>}
      </ErrorMessage>

      <Button variant="contained" color="primary" type="submit" fullWidth>
        Sign up with email
      </Button>
    </form>
  )
}

export default RegisterForm
