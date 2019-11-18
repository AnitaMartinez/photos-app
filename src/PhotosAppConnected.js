import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPhotos, sortPhotos } from './store/actions'
import { CardsList, SortButton, Pagination } from './components'
import './PhotosApp.scss'

const PhotosApp = ({photos, getPhotos, sortPhotos, currentPage, pages, isLoading }) => {

  useEffect((getPhotos), [])

  const handleSort = orderType => {sortPhotos(orderType)}

  return (
    <div className="main-container">
      <header className="header">
        <h1>Photos App</h1>
      </header>
      <main>
        <SortButton onClick={handleSort}/>
        <CardsList photos={photos} isLoading={isLoading}/>
        <Pagination
          onChangePage={getPhotos}
          currentPage={currentPage}
          pages={pages}
        />
      </main>
    </div>
  );
}

PhotosApp.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPhotos: PropTypes.func.isRequired,
  sortPhotos: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null])
  ]),
  isLoading: PropTypes.bool
}

const mapStateToProps = (state) => ({
  photos: state.photos.photos,
  currentPage: state.photos.pagination.currentPage,
  pages: state.photos.pagination.pages,
  isLoading: state.flags.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  getPhotos: pagination => { dispatch(getPhotos(pagination)) },
  sortPhotos: orderType => { dispatch(sortPhotos(orderType)) },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosApp)

