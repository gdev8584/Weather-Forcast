import React from 'react'
import mgGif from '../asserts/spinner.gif'

const Loading = () => {
  return (
    <div className="container-fluid mt-5">
        <img src={mgGif} className="img-fluid mx-auto d-block" alt="loading..." />
    </div>
  )
}

export default Loading