
// SYNCHRONOUS 

export const setPhotos = (photos, pagination) => ({
    type: 'SET_PHOTOS',
    photos,
    pagination
})

export const sortPhotos = ({isNextOrderAscending}) => ({
    type: 'SORT_PHOTOS',
    isNextOrderAscending
})

export const showLoading = () => ({
    type: 'SHOW_LOADING',
})

export const hideLoading = () => ({
    type: 'HIDE_LOADING',
})

// ASYNCHRONOUS 

export const getPhotos = pagination => ({
    type: 'GET_PHOTOS',
    pagination
})


