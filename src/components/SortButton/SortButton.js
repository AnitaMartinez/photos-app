import React, {useState}  from 'react'
import PropTypes from 'prop-types'
import './SortButton.css'
import ArrowDown from '../../assets/icons/arrow-down.svg'
import ArrowUp from '../../assets/icons/arrow-up.svg'


export const SortButton = ({onClick}) => {

    // Ascending alphabetical order: A to Z
    const [isNextOrderAscending, toggleOrder] = useState(false)

    const handleClick = () => {
        toggleOrder(!isNextOrderAscending)
        onClick({isNextOrderAscending})
    }

    return (
        <button className="SortButton" onClick={handleClick}>
            <span>Title</span>
            <img src={isNextOrderAscending ? ArrowDown : ArrowUp} alt="arrow down"></img>
        </button>
    )
}

SortButton.propTypes = {
    onClick: PropTypes.func.isRequired
}