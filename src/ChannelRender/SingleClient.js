import React from 'react'

export default class RenderSingleClient extends React.Component {
  render() {
    const { client } = this.props;
    
    if (client.clientInputMuted || client.clientOutputMuted) {
      return (
        <li style={{color: "red"}}>{client.clientNickname}</li>
      )
    }

    return (
      <li>{client.clientNickname}</li>
    )
  }
}
