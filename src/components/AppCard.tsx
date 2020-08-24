import React from 'react'
import Link from 'next/link'
import { Box, Typography, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// TODO typing
interface AppCardProps {
  app: any
  link?: string
  handleClick?: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.background.tertiary}`,
    background: theme.palette.background.paper,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    position: 'relative',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.02), 0px 8px 16px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.08)',
      border: `1px solid ${theme.palette.primary.main}`,
      '& > .MuiBox-root': {
        backgroundColor: theme.palette.primary.main,
        '& > .MuiTypography-caption': {
          color: theme.palette.primary.contrastText,
        },
      },
    },
  },
  image: {
    height: 32,
    objectFit: 'contain',
    borderRadius: 100,
    border: `1px solid ${theme.palette.background.tertiary}`,
    marginRight: theme.spacing(1),
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    padding: theme.spacing(0.5, 2),
    borderRadius: 8,
    backgroundColor: theme.palette.background.tertiary,
    position: 'absolute',
    right: theme.spacing(0.25),
    top: theme.spacing(-1),
  },
}))

const AppCard: React.FC<AppCardProps> = (props) => {
  const { app, link, handleClick } = props
  const { title, slug, image, isPremium } = app || {}
  const classes = useStyles()

  const AppCardBase = () => (
    <>
      <img className={classes.image} src={image} alt="logo" />
      <Typography variant="h3">{title}</Typography>
      {isPremium && (
        <Box className={classes.badge}>
          <Typography variant="caption">Premium</Typography>
        </Box>
      )}
    </>
  )

  if (isPremium) {
    return (
      <Box className={classes.root} onClick={handleClick}>
        <AppCardBase />
      </Box>
    )
  }

  return (
    <Link href={link || '/connect-application'} passHref>
      <Box component="a" className={classes.root}>
        <AppCardBase />
      </Box>
    </Link>
  )
}

export default AppCard
