import React from 'react'
import PropTypes from 'prop-types'
import './CardsList.css'
import { Card } from '../index'

export const CardsList = ({photos, isLoading}) => {

    return (
        <div className="CardsList">
            {
                photos.map(photo => (
                    <Card photo={photo} key={photo.title} isLoading={isLoading} />
                ))
            }
        </div>
    )
}

CardsList.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool
}