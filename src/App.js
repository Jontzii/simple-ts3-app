import React from 'react';
import './App.css';

/*
  TODO:
  Every channel is one tile in a grid

  Every tile has a header showing the name of the channel
  Every tile has a list of clients on that channel
*/

class App extends React.Component {

  // fake loading time
  LoadingFaker(){
    return new Promise(resolve => setTimeout(resolve, 500)) // 1 seconds
  }

  componentDidMount(){
    this.LoadingFaker().then(() => {
      const spinningLoader = document.getElementById('Loader')
      
      if(spinningLoader){
        // fade out
        spinningLoader.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          spinningLoader.outerHTML = ''
        }, 2000)
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
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
          className="App-link"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >
            Join server!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
