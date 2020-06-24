import { axiosWithAuth } from '../utils/axiosAuth'

export const DELETE_STORY_START = 'DELETE_STORY_START'
export const DELETE_STORY_SUCCESS = 'DELETE_STORY_SUCCESS'
export const DELETE_STORY_FAIL = 'DELETE_STORY_FAIL'



export const deleteStory = (storyID) => dispatch => {
    dispatch({ type: DELETE_STORY_START, payload: storyID})
    axiosWithAuth()
    .delete(`https://bw-expatjournal.herokuapp.com/api/stories/${storyID}`)
    .then(res => {
        console.log('i deleted the story!')
        dispatch({type: DELETE_STORY_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: DELETE_STORY_FAIL, payload: err})
    })

}