import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'
import Spinner from '../../assets/icons/spinner.svg'

export const Card = ({photo, isLoading}) => {
    return (
        <div>
          {
            isLoading ? <img src={Spinner} alt="spinner"></img>
              : (
                <div className="Card">
                  <p>{photo.title}</p> 
                  <a href={`${photo.url}`} target="_blank" rel="noopener noreferrer">Link</a> 
                  <img src={`${photo.thumbnailUrl}`} alt={`${photo.title}`}></img>
                </div>
              )
          }
        </div>
    )
}

Card.propTypes = {
  photo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool
}