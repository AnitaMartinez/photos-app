import { call,put, takeLatest } from 'redux-saga/effects'
import { Api } from '../../api'

function* getPhotos(action) {
    const photos = yield call(Api.getPhotos)
    if(photos) {
        yield put({ type: 'SET_PHOTOS', photos })
    } else {
        console.log('error', photos)
    }
}

function* mySaga() {
    yield takeLatest('GET_PHOTOS', getPhotos);
}

export default mySaga
