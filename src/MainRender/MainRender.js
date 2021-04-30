import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Error from 'Error/Error'
import Header from 'MainRender/Header/Header'
import RenderSingleChannel from './ChannelRender/SingleChannelRender'

import './MainRender.css'

export default function MainRender (props) {
  const { data, errorCode } = props
  const [userLoggedIn, setLoginStatus] = useState(false)

  if (data && data.channels) {
    const channels = []

    data.channels.forEach(channel => {
      channels.push(
        <RenderSingleChannel
          key={channel.cid}
          channelName={channel.channelName}
          clients={channel.clients}
        />)
    })

    if (channels.length > 0) {
      return (
        <div>
          <Header
            userLoggedIn={userLoggedIn}
            setLoginStatus={setLoginStatus.bind(this)}
          />
          <section className='App-section'>
            <div className='App-section-grid-wrapper'>
              {channels}
            </div>
          </section>
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
