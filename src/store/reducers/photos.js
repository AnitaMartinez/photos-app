
const initialState = {
    photos: []
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PHOTOS': 
            return {
                ...state,
                photos: action.photos
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

export default tasks