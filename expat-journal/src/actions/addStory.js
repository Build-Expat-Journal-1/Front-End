import { axiosWithAuth } from '../utils/axiosAuth'

export const ADD_STORY_START = 'ADD_STORY_START'
export const ADD_STORY_SUCCESS = 'ADD_STORY_SUCCESS'
export const ADD_STORY_FAIL = 'ADD_STORY_FAIL'

export const addStory = (story) => dispatch => {
    dispatch({ type: ADD_STORY_START, payload: story})
    axiosWithAuth()
    .post(`https://bw-expatjournal.herokuapp.com/api/stories`, story)
    .then(res => {
        console.log('i added the story!')
        dispatch({type: ADD_STORY_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: ADD_STORY_FAIL, payload: err})
    })
    
}