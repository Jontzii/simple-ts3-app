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

/*
  TODO:
  Every channel is one tile in a grid

  Every tile has a header showing the name of the channel
  Every tile has a list of clients on that channel
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      data: null
    }
  }

  /**
   * Fake loading time
   */
  minLoadingTimer(){
    return new Promise(resolve => setTimeout(resolve, 500)) // 1 second
  }

  componentDidMount(){
    this.minLoadingTimer().then(() => {
      this.handleFetch().then(() => clearLoader());
    })
  }

  /**
   * Fetches new data
   */
  handleFetch() {
    return new Promise(resolve => {
      fetchData()
      .then(res => {
        this.setState({
          data: res
        })

        resolve()
      })
      .catch(err => console.log(err));
    })
  }
  
  render() {
    const {
      error,
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
          <MainRender data={data} />
        </div>
      );
    }
  }
}

export default App;
