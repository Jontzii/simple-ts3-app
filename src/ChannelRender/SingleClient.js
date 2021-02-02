import React from 'react'

/* Icons */
import arrow from './../Assets/arrow.png'
import inputOff from './../Assets/inputOff.png'
import outputOff from './../Assets/outputOff.png'

export default class RenderSingleClient extends React.Component {
  render() {
    const { client } = this.props;

    if (client.clientInputMuted && client.clientOutputMuted) {
      return (
        <li>
          <span>
            <img src={arrow} alt="Arrow" />
            <span> {client.clientNickname} - <AddMicOffImage /> | <AddSoundOffImage /></span>
          </span>
        </li>
      )
    }
    else if (client.clientInputMuted && !client.clientOutputMuted) {
      return (
        <li>
          <span>
            <img src={arrow} alt="Arrow" />
            <span> {client.clientNickname} - <AddMicOffImage /></span>
          </span>
        </li>
      )
    }
    else if (!client.clientInputMuted && client.clientOutputMuted) {
      return (
        <li>
          <span>
            <img src={arrow} alt="Arrow" />
            <span> {client.clientNickname} - <AddSoundOffImage /></span>
          </span>
        </li>
      )
    }
    else {
      return (
        <li>
          <img src={arrow} alt="Arrow" />
          <span> {client.clientNickname}</span>
        </li>
      )
    }
  }
}

class AddMicOffImage extends React.Component {
  render() {
    return (
      <img src={inputOff} title="Client's microphone is muted." alt="Microphone muted" />
    )
  }
}

class AddSoundOffImage extends React.Component {
  render() {
    return (
      <img src={outputOff} title="Client's output is muted." alt="Output muted" />
    )
  }
}
