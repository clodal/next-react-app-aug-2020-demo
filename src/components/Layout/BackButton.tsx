import React from 'react'
import clsx from 'clsx'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { makeStyles } from '@material-ui/core/styles'
import { Button, ButtonProps, Typography, Theme } from '@material-ui/core'

interface BackButtonProps extends Omit<ButtonProps, 'color'> {
  color?: string
}

interface BackButtonStyles {
  color?: string
}

const useStyles = makeStyles<Theme, BackButtonStyles>((theme) => ({
  root: {
    '&, & .MuiButton-startIcon': {
      color: ({ color }) => color || theme.palette.common.black,
    },
    '& .MuiButton-startIcon': {
      borderRadius: '50%',
      backgroundColor: theme.palette.background.secondary,
      padding: theme.spacing(0.25),
    },
  },
}))

const BackButton: React.FC<BackButtonProps> = (props) => {
  const { className, color, ...rest } = props
  const classes = useStyles({ color })

  return (
    <Button className={clsx(classes.root, className)} startIcon={<ArrowBackIcon />} {...rest}>
      <Typography variant="body2" color="textPrimary">
        Back
      </Typography>
    </Button>
  )
}

export default BackButton
