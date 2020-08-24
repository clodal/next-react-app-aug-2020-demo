import React from 'react'
import Router from 'next/router'
import * as yup from 'yup'
import { useForm, Controller, ErrorMessage } from 'react-hook-form'
import { Button, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface ForgotPasswordValues {
  email: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
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
}))

const forgotPasswordFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required.'),
})

const ForgotPasswordForm = () => {
  const classes = useStyles()

  const { handleSubmit, control, errors, setError, clearError } = useForm<ForgotPasswordValues>({
    validationSchema: forgotPasswordFormSchema,
  })

  // TEMPORARY DEMO FUNCTIONALITY
  const mockSubmit = () => {
    Router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(mockSubmit)} className={classes.root}>
      <Controller
        as={TextField}
        control={control}
        className={classes.formField}
        name="email"
        variant="outlined"
        fullWidth
        error={Boolean(errors.email)}
        InputProps={{ className: classes.input }}
        onClick={() => clearError('email')}
      />
      <ErrorMessage errors={errors} name="email">
        {({ message }) => <Typography className={classes.errorText}>{message}</Typography>}
      </ErrorMessage>

      <Button fullWidth variant="contained" color="primary" type="submit">
        Send reset password link
      </Button>
    </form>
  )
}

export default ForgotPasswordForm
