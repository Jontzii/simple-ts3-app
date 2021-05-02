import React from 'react'
import PropTypes from 'prop-types'

import './Error.css'

export default function Error (props) {
  let { message } = props

  if (!message) {
    message = 'No description given😥'
  }

  return (
    <header className="App-error">
      <div className="App-error-title">
        <h1>Something went terribly wrong...</h1>
      </div>
      <div className="App-error-message">
        {message}
      </div>
    </header>
  )
}

Error.propTypes = {
  message: PropTypes.string
}
