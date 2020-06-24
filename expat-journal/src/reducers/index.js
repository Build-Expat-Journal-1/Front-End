import { combineReducers } from "redux";
import { addStoryReducer } from './AddStoryReducer'
import { editStoryReducer } from './EditStoryReducer'
import { deleteStoryReducer } from './DeleteStoryReducer'


export default combineReducers({
    addStoryReducer,
    editStoryReducer,
    deleteStoryReducer

})