import React, { useEffect } from 'react';
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

const mapStateToProps = (state, ownProps) => ({
  photos: state.photos.photos,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getPhotos: () => { dispatch(getPhotos()) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosApp)