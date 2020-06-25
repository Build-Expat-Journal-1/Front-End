import { 
    ADD_STORY_START,
    ADD_STORY_SUCCESS,
    ADD_STORY_FAIL
} from '../actions/addStory';

const initalState = {
    stories: [],
    error: '',
    isFetching: false,
    success_message: ''
};

export const addStoryReducer = (state = initalState, action) => {
    switch(action.type){
        case ADD_STORY_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case ADD_STORY_SUCCESS:
            return {
                ...state,
                stories: [
                    ...state.stories,
                    action.payload
                ],
                isFetching: false,
                error: '',
                success_message: 'Story added! You can add another story now, or click the close button'
            };
        case ADD_STORY_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}