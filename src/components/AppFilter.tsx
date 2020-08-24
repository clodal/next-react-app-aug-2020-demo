import React from 'react'
import { Box, Typography, Theme } from '@material-ui/core'
import { DatePicker } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles'
import ConnectedAppIcon from './ConnectedAppBar/ConnectedAppIcon'

interface AppFilterProps {
  apps: any[]
  handleClick?: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.04)',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  filterWrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1.5, 0),
    },
  },
  header: {
    marginBottom: theme.spacing(1.5),
  },
  appsWrapper: {
    display: 'flex',
    '& > :not(:first-child)': {
      marginLeft: theme.spacing(1.5),
    },
  },
  deselectedIcon: {
    opacity: 0.3,
  },
  startDatePicker: {
    marginRight: theme.spacing(1.5),
  },
}))

const AppFilter: React.FC<AppFilterProps> = (props) => {
  const { apps, handleClick } = props
  const classes = useStyles()

  const [deselected, setDeselected] = React.useState([])
  const [startDate, handleStartDateChange] = React.useState(new Date())
  const [endDate, handleEndDateChange] = React.useState(new Date())

  const toggleAppSelected = (id: number) => {
    if (deselected.includes(id)) {
      const nextDeselected = deselected.filter((arrayId) => arrayId !== id)
      setDeselected(nextDeselected)
    } else {
      setDeselected((prevState) => [id, ...prevState])
    }
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.filterWrapper}>
        <Typography className={classes.header} variant="h3">
          Accounts
        </Typography>
        <Box className={classes.appsWrapper}>
          {apps.map((app) => (
            <ConnectedAppIcon
              key={app.id}
              app={app}
              deselected={deselected.includes(app.id)}
              handleClick={() => {
                toggleAppSelected(app.id)
                // Refresh page for demo purposes
                handleClick()
              }}
            />
          ))}
        </Box>
      </Box>
      <Box className={classes.filterWrapper}>
        <Typography className={classes.header} variant="h3">
          Date Range
        </Typography>
        <Box display="flex">
          <DatePicker
            className={classes.startDatePicker}
            autoOk
            label="Start Date"
            clearable
            value={startDate}
            onChange={(e) => {
              handleStartDateChange(e)
              // Refresh page for demo purposes
              handleClick()
            }}
          />
          <DatePicker
            autoOk
            label="End Date"
            clearable
            value={endDate}
            onChange={(e) => {
              handleEndDateChange(e)
              // Refresh page for demo purposes
              handleClick()
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default AppFilter
