import {
    DELETE_STORY_START,
    DELETE_STORY_SUCCESS,
    DELETE_STORY_FAIL 
} from '../actions/deleteStory.js'

const initalState = {
    story: {},
    error: '',
    isFetching: false
}

export const deleteStoryReducer = ( state=initalState, action) => {
    switch(action.type){
        case DELETE_STORY_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case DELETE_STORY_SUCCESS:
            return {
                ...state,
                story: action.payload,
                isFetching: false,
                error: ''
            };
        case DELETE_STORY_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}