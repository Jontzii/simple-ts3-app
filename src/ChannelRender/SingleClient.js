import React from 'react'

export default class RenderSingleClient extends React.Component {
  render() {
    const { client } = this.props;
    
    return (
      <li>{client.clientNickname}</li>
    )
  }
}
