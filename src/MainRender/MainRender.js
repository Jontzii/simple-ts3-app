import React from 'react';
import './MainRender.css';

import Error from './../Error/Error'
import Footer from './../Footer/Footer'
import Header from './../Header/Header'
import RenderSingleChannel from './../ChannelRender/SingleChannelRender'

export default class MainRender extends React.Component {
  render() {
    const { data, errorCode } = this.props;

    if (data && data.channels) {
      let channels = [];

      data.channels.forEach(channel => {
        channels.push(<RenderSingleChannel key={channel.cid} channelName={channel.channelName} clients={channel.clients} />);
      });

      if (channels.length > 0) {
        return (
          <div>
            <Header />

            <section className='App-section'>
              <div className='App-section-grid-wrapper'>
                {channels}
              </div>
            </section>

            <Footer />
          </div>          
        );
      }
      else {
        return (
          <div>
            <Error message={'No channels found on the server🤨'}/>
            <Footer />
          </div>
        )
      }
    }
    else {
      if (errorCode) {
        return (
          <div>
            <Error message={`Error while fetching data🙁 (${errorCode})`}/>
            <Footer />
          </div>
        )
      }
      else {
        return (
          <div>
            <Error message={'Error while fetching data🙁'}/>
            <Footer />
          </div>
        )
      }
    }
  }
}
