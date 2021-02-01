import React from 'react';
import './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="App-footer">
        <a 
          className="hvr-float-shadow" 
          href="https://joonashiltunen.fi" 
          target="_blank"
          rel="noreferrer"
        >
          © 2021 Jontzi
        </a>
      </footer>
    )
  }
}