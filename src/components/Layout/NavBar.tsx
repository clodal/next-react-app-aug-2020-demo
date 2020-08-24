import React, { useState } from 'react'
import kebabCase from 'lodash/kebabCase'
import MenuIcon from '@material-ui/icons/Menu'
import SpeedIcon from '@material-ui/icons/Speed'
import DragHandleRoundedIcon from '@material-ui/icons/DragHandleRounded'
import StarRoundedIcon from '@material-ui/icons/StarRounded'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'
import MessageRoundedIcon from '@material-ui/icons/MessageRounded'
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Box, Button, IconButton, Theme, Typography, Menu, MenuItem } from '@material-ui/core'
import NavLink from './NavLink'
import NavDrawer from './NavDrawer'

interface NavBarProps {
  onBackBtnClick?: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: theme.palette.background.paper,
  },
  bottomMenuWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    height: 32,
    width: 32,
    fontSize: theme.typography.body2.fontSize,
    backgroundColor: theme.palette.secondary.dark,
    marginRight: theme.spacing(1),
  },
  avatarName: {
    color: theme.palette.text.primary,
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileNavWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1, 0),
  },
  navBarContainer: {
    alignItems: 'center',
    padding: theme.spacing(1, 0),
  },
  navBarLinksWrapper: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(3),
    },
  },
  iconBarLinksWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      '& > :not(:first-child)': {
        marginLeft: theme.spacing(1),
      },
    },
  },
  loginButton: {
    padding: theme.spacing(1),
  },
  menuWrapper: {
    '& .MuiPaper-root': {
      borderRadius: 4,
    },
    '& .MuiMenuItem-root': {
      fontSize: theme.typography.pxToRem(16),
    },
  },
  closeButton: {
    padding: theme.spacing(1.5, 0),
  },
  secondaryHamburgerLink: {
    color: theme.palette.primary.main,
  },
  secondaryLinkButton: {
    padding: 0,
    marginTop: theme.spacing(2),
  },
  hiddenSmDownNavbar: {
    minWidth: 210,
    padding: theme.spacing(4, 2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  hiddenMdUp: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

// TODO: Add mock functionality
const LogoutNavLink = ({ label, className, ...rest }) => {
  return (
    <Button>
      <Typography variant="body2" className={className}>
        {label}
      </Typography>
    </Button>
  )
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen)

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const classes = useStyles()

  const navLinks = [
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: SpeedIcon,
    },
    {
      label: 'Feed',
      route: '/feed',
      icon: DragHandleRoundedIcon,
    },
    {
      label: 'Saved For Later',
      route: '/saved',
      icon: StarRoundedIcon,
    },
    {
      label: 'Manage Apps',
      route: '/manage',
      icon: SettingsRoundedIcon,
    },
    {
      label: 'Support',
      route: '/support',
      icon: MessageRoundedIcon,
    },
  ]

  const iconLinks = [
    {
      label: 'Log Out',
      render: (
        <>
          <Avatar onClick={handleOpenMenu} className={classes.avatar}>
            JD
          </Avatar>
          <Menu
            id="user-icon-menu"
            className={classes.menuWrapper}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            transformOrigin={{
              vertical: -45,
              horizontal: 0,
            }}
          >
            <MenuItem>Sign Out</MenuItem>
          </Menu>
        </>
      ),
    },
  ]

  const hamburgerNavLinks = [
    {
      label: 'Close',
      render: (
        <IconButton className={classes.closeButton} color="primary" onClick={toggleDrawer} aria-label="close drawer">
          <CloseIcon fontSize="large" />
        </IconButton>
      ),
    },
    ...navLinks,
    {
      label: 'Sign Out',
      render: (
        <Button className={classes.secondaryLinkButton} variant="text">
          <LogoutNavLink label="Sign Out" className={classes.secondaryHamburgerLink} />
        </Button>
      ),
    },
  ]

  const renderNavLink = (navLink) => {
    const { route, render, ...rest } = navLink
    return route ? <NavLink {...rest} route={route} key={navLink.route} /> : render
  }

  return (
    <Box className={classes.root}>
      {/* Nav Links @ SM and below */}
      <Box className={classes.hiddenMdUp}>
        <Box className={classes.mobileNavWrapper}>
          <Box>
            <IconButton color="inherit" onClick={toggleDrawer} aria-label="open drawer" size="medium">
              <MenuIcon />
            </IconButton>
          </Box>
          <Box className={classes.iconBarLinksWrapper}>
            {iconLinks.map((navLink, i) => {
              return <React.Fragment key={kebabCase(navLink?.label)}>{renderNavLink(navLink)}</React.Fragment>
            })}
          </Box>
        </Box>
      </Box>

      {/* Nav Links @ MD and above */}
      <Box className={classes.hiddenSmDownNavbar}>
        {/* Page Links */}
        <Box className={classes.navBarLinksWrapper}>
          {navLinks.map((navLink, i) => {
            return <React.Fragment key={kebabCase(navLink?.label)}>{renderNavLink(navLink)}</React.Fragment>
          })}
        </Box>
        {/* Avatar */}
        {/* TODO: Display AWS image in the Avatar or create custom component */}
        {/* Avatar is temp hardcoded to always show the same user name */}
        <Box className={classes.bottomMenuWrapper}>
          <Box className={classes.avatarWrapper}>
            <Avatar className={classes.avatar}>JD</Avatar>
            <Typography className={classes.avatarName} variant="body2">
              James
            </Typography>
          </Box>
          <IconButton onClick={handleOpenMenu}>
            <MoreHorizRoundedIcon />
          </IconButton>
        </Box>
      </Box>
      {/* Nav Drawer */}
      <NavDrawer open={isDrawerOpen} onClose={toggleDrawer} links={hamburgerNavLinks} />
    </Box>
  )
}

export default NavBar
