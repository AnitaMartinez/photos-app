import React from 'react';
import './Card.css';

// TODO: proptypes

export const Card = ({photo}) => {

    return (
        <div className="Card">
          <p>{photo.title}</p> 
          <a href={`${photo.url}`} target="_blank" rel="noopener noreferrer">Link</a> 
          <img src={`${photo.thumbnailUrl}`} alt={`${photo.title}`}></img>
        </div>
    )
}