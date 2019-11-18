
const initialState = {
    photos: [],
    pagination: {
        currentPage: 1,
        itemsPerPage: 4,
        pages: null
    }
}

const photos = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PHOTOS': 
            return {
                ...state,
                photos: action.photos,
                pagination: {
                    ...state.pagination, 
                    currentPage: action.pagination.page, 
                    pages: action.pagination.pages
                }
            } 
        case 'SORT_PHOTOS': 
            const sortedPhotos = state.photos.slice().sort((a, b) => {
                if(action.isNextOrderAscending) {
                    if(a.title > b.title) {
                        return 1
                    }
                    if(a.title < b.title) {
                        return -1
                    }
                } else {
                    if(a.title > b.title) {
                        return -1
                    }
                    if(a.title < b.title) {
                        return 1
                    }
                }
                return 0
            })
            return {
                ...state,
                photos: sortedPhotos
            } 
        default: 
            return state
    }
}

export default photos