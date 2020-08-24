import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Box, Container, Typography, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../../components/Layout/Layout'
import LoginForm from './LoginForm'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
  signUpWrapper: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  signUpLink: {
    marginLeft: theme.spacing(0.5),
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}))

const Login: React.FC = (props) => {
  const classes = useStyles(props)

  return (
    <Layout
      title="Login"
      onBackBtnClick={() => {
        Router.back()
      }}
    >
      <Container className={classes.root} maxWidth="sm">
        <Typography variant="h1">Sign in to your account</Typography>
        <Box className={classes.signUpWrapper}>
          <Typography variant="h2">Don't have an account?</Typography>
          <Link href="register" passHref>
            <Typography component="a" className={classes.signUpLink} variant="h2">
              Sign up
            </Typography>
          </Link>
        </Box>
        <LoginForm />
      </Container>
    </Layout>
  )
}

export default Login
