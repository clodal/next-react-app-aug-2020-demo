import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Helmet } from 'react-helmet'
import { Box, Theme } from '@material-ui/core'
import clsx from 'clsx'
import NavBar from './NavBar'
import BackButton from './BackButton'

interface LayoutStyles {
  showNavbar: boolean
}

interface LayoutProps {
  className?: string
  title: string
  onBackBtnClick?: () => void
  showFooter?: boolean
  showNavbar?: boolean
}

const useStyles = makeStyles<Theme, LayoutStyles>((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  main: {
    flex: 1,
    // ensures that footer is always at bottom of page @link: https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Sticky_footers
    minHeight: '100vh',
    display: 'flex',
    overflowX: 'hidden',
    [theme.breakpoints.up('md')]: {
      flexDirection: ({ showNavbar }) => (showNavbar ? 'row' : 'column'),
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    '& > main': {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'column',
      width: '100%',
    },
  },
  backButtonWrapper: {
    width: '100%',
    padding: theme.spacing(5, 0, 0, 5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
}))

const Layout: React.FC<LayoutProps> = (props) => {
  const { className, title, onBackBtnClick, showNavbar = false, children } = props
  const classes = useStyles({ showNavbar })

  return (
    <Box>
      <div className={clsx(classes.root, className)}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Box className={classes.main}>
          {onBackBtnClick && (
            <Box className={classes.backButtonWrapper}>
              <BackButton onClick={onBackBtnClick} />
            </Box>
          )}
          {showNavbar && <NavBar />}
          <main>{children}</main>
        </Box>
      </div>
    </Box>
  )
}

export default Layout
