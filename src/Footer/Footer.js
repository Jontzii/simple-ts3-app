import React from 'react'
import github from './../Assets/github.png'

import './Footer.css'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className="App-footer">
        <div>
          <div id="githubLogo">
            <a
              href="https://github.com/jontzii/simple-ts3-app"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Github logo" />
            </a>
          </div>
          <a
            className="hvr-float-shadow"
            href="https://joonashiltunen.fi"
            target="_blank"
            rel="noreferrer"
          >
            © 2021 Jontzi
          </a>
        </div>
      </footer>
    )
  }
}
