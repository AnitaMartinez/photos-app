
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
        default: 
            return state
    }
}

export default tasks