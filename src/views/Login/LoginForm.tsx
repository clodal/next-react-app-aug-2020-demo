import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import * as yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'
import { useForm, Controller, ErrorMessage } from 'react-hook-form'
import { TextField, Button, IconButton, InputAdornment, Typography, Theme } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

interface LoginFormProps {
  onLoginSuccess?: () => void
}

interface LoginFormValues {
  email: string
  password: string
}

const defaultValues = { email: '', password: '' }

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
  errorText: {
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 400,
    color: theme.palette.error.main,
    alignSelf: 'flex-start',
    marginTop: theme.spacing(-2),
  },
  signInButton: {
    marginTop: theme.spacing(5),
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    marginTop: theme.spacing(-2),
  },
}))

const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required.'),
  password: yup.string().required('Required.'),
})

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const classes = useStyles()

  const { control, handleSubmit, errors, reset } = useForm<LoginFormValues>({
    defaultValues,
    validationSchema: loginFormSchema,
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

  // TEMPORARY DEMO FUNCTIONALITY
  const mockSubmit = () => {
    reset()
    Router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(mockSubmit)} className={classes.root}>
      <Button
        startIcon={<img className={classes.icon} src="/google-logo.png" alt="google-login" />}
        variant="outlined"
        color="primary"
        type="button"
        fullWidth
      >
        Sign in with Google
      </Button>

      <Typography>or</Typography>

      <Controller
        as={TextField}
        fullWidth
        control={control}
        className={classes.formField}
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
        control={control}
        className={classes.formField}
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
      <ErrorMessage errors={errors} name="password">
        {({ message }) => <Typography className={classes.errorText}>{message}</Typography>}
      </ErrorMessage>

      <Link href="/forgot-password" passHref>
        <Typography className={classes.forgotPassword} component="a" variant="overline">
          Forgotten your password?
        </Typography>
      </Link>

      <Button className={classes.signInButton} variant="contained" color="primary" type="submit" fullWidth>
        Sign in with email
      </Button>
    </form>
  )
}

export default LoginForm
