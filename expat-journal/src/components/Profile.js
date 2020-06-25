import React, { useEffect, useState } from "react"
import { axiosWithAuth } from "../utils/axiosAuth.js"
import { connect } from 'react-redux'

import AdminPost from "./AdminPost.js"
import AddStory from './AddStory.js'

import './Profile.css'




const Profile = (props) => {

    const [ userStories, setUserStories ] = useState([])
        
    useEffect(() => {
                    axiosWithAuth()
                    .get(`https://bw-expatjournal.herokuapp.com/api/stories/${props.user.id}/my-stories`)
                    .then(res =>
                        setUserStories(res.data),
                        console.log('i got new stories'))
                    .catch(err => console.log(err))
                }, [props.edit, props.delete])

    return (
      <div>  
        <div className='addStoryToolBar'>
            <AddStory />
        </div>
        <div className='feed'>
            {userStories.map(story => {
                return <AdminPost key={story.id} story={story}/>})
            }
        </div>
    </div> 
        )
    }



const mapStateToProps = (state) => {
    return {
    edit: state.editStoryReducer.stories,
    delete: state.deleteStoryReducer.story,
    add: state.addStoryReducer.stories
    }
}



export default connect(mapStateToProps, {})(Profile)
