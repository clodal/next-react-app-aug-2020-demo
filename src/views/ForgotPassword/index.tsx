import React from 'react'
import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import Layout from '../../components/Layout/Layout'
import ForgotPasswordForm from './ForgotPasswordForm'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
}))

const ForgotPassword = () => {
  const classes = useStyles()

  return (
    <Layout
      onBackBtnClick={() => {
        Router.back()
      }}
      title="Forgot password"
    >
      <Container className={classes.root} maxWidth="sm">
        <Typography className={classes.title} variant="h1">
          Forgotten your password?
        </Typography>
        <Typography className={classes.subtitle} variant="h2">
          Enter your email address and we'll send you a reset your password link.
        </Typography>
        <ForgotPasswordForm />
      </Container>
    </Layout>
  )
}

export default ForgotPassword
