import axiosWithAuth from '../utils/axiosAuth'

export const FETCH_STORIES_START = 'FETCH_STORIES_START'
export const FETCH_STORIES_SUCCESS = 'FETCH_STORIES_SUCCESS'
export const FETCH_STORIES_FAIL = 'FETCH_STORIES_FAIL'



export const getUserStories = () => dispatch => {

    dispatch({type: FETCH_STORIES_START})
        axiosWithAuth()
        .get('https://bw-expatjournal.herokuapp.com/api/stories/:id/my-stories')



}