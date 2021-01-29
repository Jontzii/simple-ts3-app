import React from 'react';
import './App.css';

/*
  TODO:
  Every channel is one tile in a grid

  Every tile has a header showing the name of the channel
  Every tile has a list of clients on that channel
*/

class App extends React.Component {

  /**
   * Fake loading time
   */
  LoadingFaker(){
    return new Promise(resolve => setTimeout(resolve, 1000)) // 1 second
  }

  componentDidMount(){
    this.LoadingFaker().then(() => {
      const spinningLoader = document.getElementById('Loader')
      
      if(spinningLoader){
        // Fade out the spinner
        spinningLoader.classList.add('available')
        
        // Remove from DOM
        setTimeout(() => {
          spinningLoader.outerHTML = ''
        }, 4000)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Naapur1t TS server
          </h1>

          <a className="hvr-float-shadow" target="_blank" rel="nofollow noopener noreferrer">
            Join server
          </a>
        </header>
        <section className="App-section">
          <div id="Channelview">
            
          </div>
        </section>
        <footer className="App-footer">
          <a className="hvr-float-shadow" href="https://joonashiltunen.fi" target="_blank">
            © 2021 Jontzi
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
