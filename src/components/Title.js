import React from 'react'

const Title = (props) => {

    const {titleOne, titleTwo} = props

  return (
    <div className="section-title">
        <h2>{titleOne} <span>{titleTwo}</span></h2>
      </div>
  )
}

export default Title