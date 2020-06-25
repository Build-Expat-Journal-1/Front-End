import { axiosWithAuth } from '../utils/axiosAuth'

export const EDIT_STORY_START = 'EDIT_STORY_START'
export const EDIT_STORY_SUCCESS = 'EDIT_STORY_SUCCESS'
export const EDIT_STORY_FAIL = 'EDIT_STORY_FAIL'



export const editStory = (story, storyID) => dispatch => {
    dispatch({ type: EDIT_STORY_START, payload: story})
    axiosWithAuth()
    .put(`https://bw-expatjournal.herokuapp.com/api/stories/${storyID}`, story)
    .then(res => {
        console.log(res)
        dispatch({type: EDIT_STORY_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: EDIT_STORY_FAIL, payload: err})
    })

}


