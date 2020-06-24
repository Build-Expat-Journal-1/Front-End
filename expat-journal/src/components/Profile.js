import React, { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { axiosWithAuth } from "../utils/axiosAuth.js"

import Modal from 'react-modal'


import EditStory from "./EditStory.js"
import AdminPost from "./AdminPost.js"
import AddStory from './AddStory.js'

import { editStory } from '../actions/editStory'
import { deleteStory } from "../actions/deleteStory.js"

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
                }, [])

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



export default Profile
