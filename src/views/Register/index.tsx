import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Box, Container, Typography, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../../components/Layout/Layout'
import RegisterForm from './RegisterForm'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
  signInWrapper: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  signInLink: {
    marginLeft: theme.spacing(0.5),
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}))

const Register: React.FC = (props) => {
  const classes = useStyles(props)

  return (
    <Layout
      // TODO: Back button function
      onBackBtnClick={() => {
        Router.back()
      }}
      title="Register"
    >
      <Container className={classes.root} maxWidth="sm">
        <Typography variant="h1">Create your account</Typography>
        <Box className={classes.signInWrapper}>
          <Typography variant="h2">Already have an account?</Typography>
          <Link href="login" passHref>
            <Typography component="a" className={classes.signInLink} variant="h2">
              Sign in
            </Typography>
          </Link>
        </Box>
        <RegisterForm />
      </Container>
    </Layout>
  )
}

export default Register
