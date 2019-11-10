import React from 'react';
import './CardsList.css';
import { Card } from '../index'

// TODO: proptypes

export const CardsList = ({photos}) => {

    return (
        <div className="CardsList">
            {
                photos.map(photo => (
                    <Card photo={photo} key={photo.id} />
                ))
            }
        </div>
    )
}