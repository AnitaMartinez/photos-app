import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPhotos, sortPhotos } from './store/actions'
import { CardsList, SortButton } from './components'

const PhotosApp = ({photos, getPhotos, sortPhotos}) => {

  useEffect((getPhotos), [])

  const handleSort = orderType => {sortPhotos(orderType)}

  return (
    <div>
      <header>
        <h1>Photos App</h1>
      </header>
      <main>
        <SortButton onClick={handleSort}/>
        <CardsList photos={photos}/>
      </main>
    </div>
  );
}

PhotosApp.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPhotos: PropTypes.func.isRequired,
  sortPhotos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  photos: state.photos.photos,
})

const mapDispatchToProps = (dispatch) => ({
  getPhotos: () => { dispatch(getPhotos()) },
  sortPhotos: orderType => { dispatch(sortPhotos(orderType)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosApp)

