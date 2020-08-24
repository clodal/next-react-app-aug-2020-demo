import React from 'react'
import { Box, Container, Typography, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../../components/Layout/Layout'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.dark,
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(10),
  },
}))

const Home: React.FC = (props) => {
  const classes = useStyles(props)

  return (
    <Layout showNavbar title="Home">
      <Box className={classes.root}>
        <Container maxWidth="md" className={classes.bodyContainer}>
          <Typography variant="h1">Home</Typography>
        </Container>
      </Box>
    </Layout>
  )
}

export default Home
