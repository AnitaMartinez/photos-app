import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getPhotos } from './store/actions'
import { CardsList } from './components'

const PhotosApp = ({photos, getPhotos}) => {

  useEffect((getPhotos), [])

  return (
    <div>
      <header>
        <h1>Photos App</h1>
      </header>
      <main>
        <CardsList photos={photos}/>
      </main>
    </div>
  );
}

PhotosApp.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPhotos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  photos: state.photos.photos,
})

const mapDispatchToProps = (dispatch) => ({
  getPhotos: () => { dispatch(getPhotos()) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosApp)

