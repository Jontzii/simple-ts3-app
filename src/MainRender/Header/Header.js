import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import './Header.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function Header (props) {
  const { userLoggedIn, setLoginStatus } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Naapur1t TS3 Server
          </Typography>
          {!userLoggedIn && <Button color="inherit" onClick={e => setLoginStatus(true)} >Login</Button>}
          {userLoggedIn && <Button color="inherit" onClick={e => setLoginStatus(false)} >Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  userLoggedIn: PropTypes.bool,
  setLoginStatus: PropTypes.func.isRequired
}
