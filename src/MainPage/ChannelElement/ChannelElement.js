import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import 'Misc/Hover.css'

import ClientElement from 'MainPage/ClientElement/ClientElement'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    height: '100%',
    textAlign: 'center',
    color: '#f3f3f3',
    backgroundColor: '#3b414d',
    '& a': {
      color: '#f3f3f3',
      textDecoration: 'none'
    }
  },
  body: {
    textAlign: 'center',
    verticalAlign: 'middle',
    '& ul': {
      listStylePosition: 'inside',
      listStyleType: 'none'
    },
    '& img': {
      verticalAlign: 'middle',
      height: 'calc(10px + 2vmin)',
      width: 'calc(10px + 2vmin)'
    }
  },
  item: {
    width: '600px',
    height: '100%',
    boxSizing: 'border-box',
    alignItems: 'stretch'
  }
}))

export default function SingleChannel (props) {
  const classes = useStyles()
  const { channelName, clients } = props
  const clientsHTML = []

  if (clients && clients.length > 0) {
    // Sort clients by clientNickname
    clients.sort((a, b) => {
      return a.clientNickname.toLowerCase().localeCompare(b.clientNickname.toLowerCase())
    })

    // Render clients into a array
    clients.forEach(client => {
      clientsHTML.push(<ClientElement key={client.clid} client={client} />)
    })
  }

  return (
    <Grid item md={4} xs={12} className={classes.item}>
      <Paper className={classes.paper} elevation={20}>
        <div>
          <h3>{channelName}</h3>
        </div>
        <div className={classes.body}>
          <ul>
            {(!clients || clients.length === 0) && <p>No clients🙁</p>}
            {clients.length > 0 && clientsHTML}
          </ul>
        </div>
      </Paper>
    </Grid>
  )
}

SingleChannel.propTypes = {
  channelName: PropTypes.string.isRequired,
  clients: PropTypes.array.isRequired
}
