import { call, put, takeLatest, select } from 'redux-saga/effects'
import { Api } from '../../api'

function* getPhotos({ pagination }) {
    const { currentPage, itemsPerPage } = yield select(state => state.photos.pagination)
    const nextPage = getNextPage(pagination, currentPage)
    const response = yield call(Api.getPhotos, { page: nextPage, itemsPerPage })
    if(response) {
        const { photos , totalItems } = response
        const pages = Math.ceil(totalItems / itemsPerPage)
        yield put({ 
            type: 'SET_PHOTOS', 
            photos, 
            pagination: {
                page: nextPage,
                pages
            }
    })
    } else {
        console.log('error', response)
    }
}

const getNextPage = (pagination, currentPage) => {
    if(pagination && pagination.next) {
        return currentPage + 1
    }
    if(pagination && pagination.previous) {
        return currentPage - 1
    }
    const firstPage = 1
    return firstPage
}


function* mySaga() {
    yield takeLatest('GET_PHOTOS', getPhotos);
}

export default mySaga
