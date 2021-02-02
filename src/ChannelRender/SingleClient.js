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
            <span> {client.clientNickname} - <img src={inputOff} alt="Input muted" /> | <img src={outputOff} alt="Output muted" /></span>
          </span>
        </li>
      )
    }
    else if (client.clientInputMuted && !client.clientOutputMuted) {
      return (
        <li>
          <span>
            <img src={arrow} alt="Arrow" />
            <span> {client.clientNickname} - <img src={inputOff} alt="Input muted" /></span>
          </span>
        </li>
      )
    }
    else if (!client.clientInputMuted && client.clientOutputMuted) {
      return (
        <li>
          <span>
            <img src={arrow} alt="Arrow" />
            <span> {client.clientNickname} - <img src={outputOff} alt="Output muted" /></span>
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
