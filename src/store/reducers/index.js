import { combineReducers } from 'redux'
import flags from './flags'
import photos from './photos'


export default combineReducers({
    flags,
    photos
})