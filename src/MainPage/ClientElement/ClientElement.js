import React from 'react'
import PropTypes from 'prop-types'

/* Icons */
import arrow from 'Assets/arrow.png'
import inputOff from 'Assets/inputOff.png'
import outputOff from 'Assets/outputOff.png'

export default function SingleClient (props) {
  const { client } = props

  return (
    <li>
      <span>
        <img src={arrow} alt="Arrow" />
        {(client.clientInputMuted && client.clientOutputMuted) && <span> {client.clientNickname} - <AddMicOffImage /> | <AddSoundOffImage /></span>}
        {(client.clientInputMuted && !client.clientOutputMuted) && <span> {client.clientNickname} - <AddMicOffImage /></span>}
        {(!client.clientInputMuted && client.clientOutputMuted) && <span> {client.clientNickname} - <AddSoundOffImage /></span>}
        {(!client.clientInputMuted && !client.clientOutputMuted) && <span> {client.clientNickname}</span>}
      </span>
    </li>
  )
}

SingleClient.propTypes = {
  client: PropTypes.object.isRequired
}

function AddMicOffImage () {
  return (
    <img src={inputOff} title="Client's microphone is muted." alt="Microphone muted" />
  )
}

function AddSoundOffImage () {
  return (
    <img src={outputOff} title="Client's output is muted." alt="Output muted" />
  )
}
