
// SYNCHRONOUS 

export const setPhotos = photos => ({
    type: 'SET_PHOTOS',
    photos
})

export const sortPhotos = ({isNextOrderAscending}) => ({
    type: 'SORT_PHOTOS',
    isNextOrderAscending
})

// ASYNCHRONOUS 

export const getPhotos = () => ({
    type: 'GET_PHOTOS',
})

