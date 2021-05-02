import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import github from 'Assets/github.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282c34',
    color: '#f3f3f3',
    minHeight: '12vh',
    margin: 'auto',
    '& a': {
      padding: '1vh',
      color: '#f3f3f3'
    },
    '& img': {
      width: '32px',
      height: '32px'
    }
  }
}))

export default function Footer () {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
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
