import React from 'react'
import PropTypes from 'prop-types'
import './Pagination.css'

export const Pagination = ({onChangePage, currentPage, pages}) => {
    return (
        <div className="Pagination">
            <button 
                onClick={() => onChangePage({previous: true})} 
                disabled={currentPage === 1}
            >
                Previous</button>
            <span>{`Page: ${currentPage}`}</span>
            <button 
                onClick={() => onChangePage({next: true})} 
                disabled={currentPage === pages}
            >
                Next
            </button>
        </div>
    )
}

Pagination.propTypes = {
    onChangePage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    pages: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf([null])
    ])
}

Pagination.defaultProps = {
    currentPage: 1
}