import React from 'react'
import Link from 'next/link'
import { Avatar, Box, Chip, Typography, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface User {
  name: string
  image: string
  role: string
  link: string
}

interface UserCardProps {
  user: User
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.primary,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.background.tertiary}`,
    padding: theme.spacing(1),
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.02), 0px 8px 16px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.08)',
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
  },
  name: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(1),
  },
  roleChip: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.contrastText,
    fontWeight: 500,
  },
}))

const UserCard: React.FC<UserCardProps> = (props) => {
  const { user } = props
  const { name, image, role, link } = user || {}
  const classes = useStyles()

  return (
    <Link href={link} passHref>
      <Box component="a" className={classes.root}>
        <Avatar className={classes.avatar} src={image} />
        <Typography className={classes.name} variant="body2">
          {name}
        </Typography>
        <Chip size="small" className={classes.roleChip} label={role} />
      </Box>
    </Link>
  )
}

export default UserCard
