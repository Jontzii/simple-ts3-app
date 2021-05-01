import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import 'Misc/Hover.css'

import RenderSingleClient from 'MainRender/ClientRender/SingleClientRender'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
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
  }
}))

export default function SingleChannelRender (props) {
  const classes = useStyles()
  const { channelName, clients } = props
  const clientsHTML = []

  const url = `ts3server://ts.jontzi.com?channel=${channelName}`

  if (clients && clients.length > 0) {
    // Sort clients by clientNickname
    clients.sort((a, b) => {
      return a.clientNickname.toLowerCase().localeCompare(b.clientNickname.toLowerCase())
    })

    // Render clients into a array
    clients.forEach(client => {
      clientsHTML.push(<RenderSingleClient key={client.clid} client={client} />)
    })
  }

  return (
    <Paper className={classes.paper} elevation={20}>
      <div>
        <a href={url} >
          <h3>{channelName}</h3>
        </a>
      </div>
      <div className={classes.body}>
        <ul>
          {(!clients || clients.length === 0) && <p>No clients🙁</p>}
          {clients.length > 0 && clientsHTML}
        </ul>
      </div>
    </Paper>
  )
}

SingleChannelRender.propTypes = {
  channelName: PropTypes.string.isRequired,
  clients: PropTypes.array.isRequired
}
