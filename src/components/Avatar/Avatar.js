import React, { Component } from 'react'
import './Avatar.css'

class Avatar extends Component {
  render () {
    const { name, caption, image } = this.props

    return (
      <div className='Avatar'>
        <img src={image} className='Avatar-img' alt='member' />
        <div className='Avatar-name'>{name}</div>
        <div className='Avatar-desc'>{caption}</div>
      </div>
    )
  }
}

export default Avatar
