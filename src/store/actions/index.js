
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

// ASYNCHRONOUS 

export const getPhotos = pagination => ({
    type: 'GET_PHOTOS',
    pagination
})


