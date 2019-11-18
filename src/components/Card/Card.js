import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './Card.scss'
import Spinner from '../../assets/icons/spinner.svg'

export const Card = ({photo, isLoading}) => {
    return (
        <Fragment>
          {
            isLoading ? <img src={Spinner} alt="spinner"></img>
              : (
                <div className="Card">
                  <a href={`${photo.url}`} target="_blank" rel="noopener noreferrer">
                    <img className="image" src={`${photo.thumbnailUrl}`} alt={`${photo.title}`}></img>
                  </a> 
                  <p className="title">{photo.title}</p> 
                </div>
              )
          }
        </Fragment>
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