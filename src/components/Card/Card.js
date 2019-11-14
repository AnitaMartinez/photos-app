import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export const Card = ({photo}) => {
    return (
        <div className="Card">
          <p>{photo.title}</p> 
          <a href={`${photo.url}`} target="_blank" rel="noopener noreferrer">Link</a> 
          <img src={`${photo.thumbnailUrl}`} alt={`${photo.title}`}></img>
        </div>
    )
}

Card.propTypes = {
  photo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired
}