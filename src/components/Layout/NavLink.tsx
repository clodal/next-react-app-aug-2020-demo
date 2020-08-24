import React from 'react'
import Link from 'next/link'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box, Icon, Typography, Theme } from '@material-ui/core'
import { useRouter } from 'next/router'

interface NavLinkProps {
  label: string
  route: string
  icon: any
}

interface NavLinkStyles {
  isActive: boolean
}

const useStyles = makeStyles<Theme, NavLinkStyles>((theme) => ({
  linkWrapper: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    borderRadius: 8,
    padding: theme.spacing(0.25, 1),
    backgroundColor: ({ isActive }) => (isActive ? theme.palette.secondary.main : theme.palette.background.paper),
    '&:hover': {
      '& > *': {
        color: theme.palette.primary.main,
      },
    },
  },
  linkIcon: {
    color: ({ isActive }) => (isActive ? theme.palette.primary.main : theme.palette.text.secondary),
    marginRight: theme.spacing(1.5),
  },
  link: {
    color: ({ isActive }) => (isActive ? theme.palette.primary.main : theme.palette.text.secondary),
  },
}))

const NavLink: React.FC<NavLinkProps> = (props) => {
  const router = useRouter()

  const { label, route, icon } = props
  const isActive = router.pathname === route
  const classes = useStyles({ isActive })

  return (
    <Link href={route} passHref>
      <Box component="a" className={classes.linkWrapper}>
        <Icon className={classes.linkIcon} component={icon} />
        <Typography className={classes.link} variant="body2">
          {label}
        </Typography>
      </Box>
    </Link>
  )
}

export default NavLink
