import React from 'react';

import './SingleChannel.css'
import './../Misc/Hover.css'

import RenderSingleClient from './SingleClient'

export default class SingleChannelRender extends React.Component {
  render() {
    const { channelName, clients, cid } = this.props;
    const clientsHTML = [];

    const url = `ts3server://ts.jontzi.com?channel=${channelName}`;

    if (!clients || clients.length === 0) {
      return (
        <div className="App-section-grid-item">
          <div >
            <div className="App-section-grid-item-header">
            <a className="hvr-float-shadow" href={url} >
              <h3>{channelName}</h3>
            </a>
            </div>
            <div className="App-section-grid-item-body">
              <p>No clients connected🙁</p>
            </div>
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
          <a className="hvr-float-shadow" href={url} >
            <h3>{channelName}</h3>
          </a>
        </div>
        <div className="App-section-grid-item-body">
          <ul>
            {clientsHTML}
          </ul>
        </div>
      </div>
    )
  }
}
