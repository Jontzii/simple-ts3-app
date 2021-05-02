import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import Error from 'Error/Error'
import Header from 'MainPage/Header/Header'
import ChannelElement from 'MainPage/ChannelElement/ChannelElement'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#282c34',
    color: '#f3f3f3',
    minHeight: '100vh',
    maxWidth: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)'
  },
  grid: {
    alignItems: 'stretch',
    justifyContent: 'center',
    height: '100%'
  }
}))

export default function MainRender (props) {
  const { data, errorCode } = props
  const [userLoggedIn, setLoginStatus] = useState(false)

  const classes = useStyles()

  if (data && data.channels) {
    const channels = []

    data.channels.forEach(channel => {
      channels.push(
        <ChannelElement
          key={channel.cid}
          channelName={channel.channelName}
          clients={channel.clients}
        />)
    })

    if (channels.length > 0) {
      return (
        <div className={classes.root}>
          <Header
            userLoggedIn={userLoggedIn}
            setLoginStatus={setLoginStatus.bind(this)}
          />

          <Grid container direction={'row'} className={classes.grid}>
            {channels}
          </Grid>
        </div>
      )
    }
  }

  // Error cases
  return (
    <div>
      {(data && data.channels) && <Error message={'No channels found on the server🤨'}/>}
      {errorCode && <Error message={`Error while fetching data🙁 (${errorCode})`}/>}
      {((!data || !data.channels) && !errorCode) && <Error message={'Error while fetching data🙁'}/>}
    </div>
  )
}

MainRender.propTypes = {
  data: PropTypes.object,
  errorCode: PropTypes.number
}
