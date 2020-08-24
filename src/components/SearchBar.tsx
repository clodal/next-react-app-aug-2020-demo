import React, { useState, useEffect } from 'react'
import { Box, InputAdornment, TextField, Theme } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

interface SearchBarProps {
  className?: string
  handleSearch?: (string) => void
  placeholder?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  searchField: {
    width: '100%',
    '& > .MuiOutlinedInput-root': {
      height: 42,
      borderRadius: theme.shape.borderRadius,
    },
  },
  input: {
    backgroundColor: theme.palette.common.white,
    '& > .MuiOutlinedInput-input': {
      padding: theme.spacing(0.25, 2, 0.25, 0),
    },
    '&::placeholder': {
      opacity: 1,
      fontSize: theme.typography.body1.fontSize,
      color: theme.palette.text.secondary,
    },
  },
}))

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { className, handleSearch, placeholder = 'Search apps' } = props
  const classes = useStyles()

  const [text, setText] = useState('')

  const handleChange = (event) => {
    setText(event.target.value)
  }

  useEffect(() => {
    if (handleSearch) {
      handleSearch(text)
    }
  }, [text])

  return (
    <Box className={clsx(classes.root, className)}>
      <TextField
        className={classes.searchField}
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={text}
        variant="outlined"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Box>
  )
}

export default SearchBar
