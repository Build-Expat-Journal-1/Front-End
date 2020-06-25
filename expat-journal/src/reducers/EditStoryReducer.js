import {
    EDIT_STORY_START,
    EDIT_STORY_SUCCESS,
    EDIT_STORY_FAIL
} from '../actions/editStory'

const initalState = {
    stories: [],
    error: '',
    isFetching: false
}

export const editStoryReducer = ( state=initalState, action) => {
    switch(action.type){
        case EDIT_STORY_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case EDIT_STORY_SUCCESS:
            return {
                ...state,
                stories: action.payload,
                isFetching: false,
                error: ''
            };
        case EDIT_STORY_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}