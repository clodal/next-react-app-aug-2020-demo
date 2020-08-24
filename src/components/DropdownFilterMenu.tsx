import React from 'react'
import { Box, ListItemText, Menu, MenuItem, Typography, Theme } from '@material-ui/core'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { withStyles, makeStyles } from '@material-ui/core/styles'

interface DropdownFilterMenuProps {
  filters: string[]
}

const useStyles = makeStyles((theme: Theme) => ({
  dropdownFilterButton: {
    border: 'transparent',
    backgroundColor: 'transparent',
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2),
    '&.Mui-selected': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  },
  menuWrapper: {
    '& .MuiPaper-root': {
      minWidth: 172,
      padding: theme.spacing(1),
    },
  },
}))

const DropdownFilterMenu: React.FC<DropdownFilterMenuProps> = (props) => {
  const classes = useStyles(props)
  const { filters } = props

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [dropdownFilter, setDropdownFilter] = React.useState('')

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = () => {
    setAnchorEl(null)
  }

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 8,
        '& .MuiListItemText-primary': {
          color: theme.palette.primary.main,
        },
      },
    },
  }))(MenuItem)

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body2">{dropdownFilter}</Typography>
      <ToggleButton className={classes.dropdownFilterButton} selected={Boolean(anchorEl)} onClick={handleDropdownOpen}>
        <ExpandMoreIcon color="inherit" />
      </ToggleButton>
      <Menu
        className={classes.menuWrapper}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleDropdownClose}
        transformOrigin={{
          vertical: -60,
          horizontal: 70,
        }}
      >
        {filters.map((filter) => (
          <StyledMenuItem key={filter}>
            <ListItemText
              onClick={() => {
                setDropdownFilter(filter)
                handleDropdownClose()
                // Visually refresh the page for demo purposes
                window.location.reload()
              }}
              primaryTypographyProps={{ variant: 'body2' }}
              primary={filter}
            />
          </StyledMenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default DropdownFilterMenu
