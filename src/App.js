import React from 'react';

/* CSS Files */
import './App.css';
import './Misc/Hover.css';

/* External components */
import MainRender from './MainRender/MainRender'
import Error from './Error/Error'
import Footer from './Footer/Footer'

/* Helper functions */
import clearLoader from './Misc/ClearLoader'
import fetchData from './Misc/FetchData'
import { ShowUpdateSpinner, HideUpdateSpinner } from './Misc/UpdateLoader'

/* Analytics */
import ReactGa from 'react-ga';
const trackingId = "UA-131317095-2";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorCode: null,
      data: null
    }

    this.interval = null;
  }

  /**
   * Add some loading time so the animation wont be too fast
   */
  minLoadingTimer(){
    return new Promise(resolve => setTimeout(resolve, 500)) // 500ms
  }

  /**
   * On component mount fetch data, clear loading spinner 
   * and add timer for update.
   */
  componentDidMount(){
    this.minLoadingTimer().then(() => {
      this.handleFetch().then(() => {
        ReactGa.initialize(trackingId, {
          siteSpeedSampleRate: 100
        });
        
        ReactGa.pageview('/');
        clearLoader();
        this.interval = setInterval(this.updateChannels.bind(this), 10000); // 10s
      });
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  /**
   * Fetches data and saves it to state.
   */
  handleFetch() {
    return new Promise(resolve => {
      fetchData()
      .then(res => {
        this.setState({ data: res })
        resolve()
      })
      .catch(e => {
        this.setState({ data: null })

        if (typeof(e) === 'number') {
          this.setState({ errorCode: e })
        }

        resolve()
      });
    })
  }

  /**
   * Handles the updating process (show/hide spinner and fetching).
   */
  updateChannels() {
    // Add spinner to lower right corner
    ShowUpdateSpinner();

    // Fetch data
    this.handleFetch()
    .then(() => {
      ReactGa.event({
        category: 'Fetch',
        action: 'Fetched data successfully',
        nonInteraction: true
      });

      // Remove spinner
      setTimeout(() => HideUpdateSpinner(), 1000);
    })
    .catch(() => {
      this.setState({ data: null })
    })
  }
  
  render() {
    const {
      error,
      errorCode,
      data,
    } = this.state;

    if (error) {
      return (
        <div className="App">
          <Error />
          <Footer />
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <MainRender data={data} errorCode={errorCode} />
        </div>
      );
    }
  }
}

export default App;
