import React from 'react';
import './SingleChannel.css'

import RenderSingleClient from './SingleClient'

export default class SingleChannelRender extends React.Component {
  render() {
    const { name, clients } = this.props;
    const clientsHTML = [];

    if (!clients || clients.length === 0) {
      return (
        <div className="App-section-grid-item">
          <div className="App-section-grid-item-header">
            <h3>{name}</h3>
          </div>
          <div className="App-section-grid-item-body">
            <p>No clients connected🙁</p>
          </div>
        </div>
      )
    }

    clients.forEach(client => {
      clientsHTML.push(<RenderSingleClient key={client.clid} client={client} />)
    })

    return (
      <div className="App-section-grid-item">
        <div className="App-section-grid-item-header">
          <h3>{name}</h3>
        </div>
        <div className="App-section-grid-item-body">
          <ul>
            {clientsHTML}
          </ul>
        </div>
      </div>
    )
  }
  
  if (channel) {

    console.log(channel.channelName)

    return (
          <div className="App-section-grid-item">
            <div className="App-section-grid-item-header">
              <h1>Channel template</h1>
            </div>
            <div className="App-section-grid-item-body">
              <ul>
                <li>User template</li>
              </ul>
            </div>
          </div>
    );
  }
}
